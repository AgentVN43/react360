import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Card,
  Upload,
  Input,
  Select,
  ColorPicker,
  Slider,
  Space,
  message,
  Row,
  Col,
  Modal,
  Tooltip,
  Divider,
  Spin,
  InputNumber,
  Switch,
  Radio,
  FloatButton,
} from "antd";
import {
  UploadOutlined,
  SaveOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  DownloadOutlined,
  UndoOutlined,
  RedoOutlined,
  ScissorOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  FullscreenOutlined,
  InfoCircleOutlined,
  FileImageOutlined,
  ClearOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const FloorPlanEditor = () => {
  // Refs
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);

  // State
  const [imageInfo, setImageInfo] = useState(null);
  const [polygons, setPolygons] = useState([]);
  const [currentPolygon, setCurrentPolygon] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPolygonId, setSelectedPolygonId] = useState(null);
  const [scale, setScale] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [showGrid, setShowGrid] = useState(false);
  const [polygonName, setPolygonName] = useState("Phòng ");
  const [polygonType, setPolygonType] = useState("living-room");
  const [polygonColor, setPolygonColor] = useState("#1890ff");
  const [fillOpacity, setFillOpacity] = useState(0.3);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Color palette for room types
  const colorPalette = {
    "living-room": "#1890ff",
    bedroom: "#52c41a",
    kitchen: "#fa8c16",
    bathroom: "#722ed1",
    balcony: "#13c2c2",
    corridor: "#fadb14",
    storage: "#ff4d4f",
    office: "#eb2f96",
  };

  // Room types
  const roomTypes = [
    { value: "living-room", label: "Phòng khách", color: "#1890ff" },
    { value: "bedroom", label: "Phòng ngủ", color: "#52c41a" },
    { value: "kitchen", label: "Nhà bếp", color: "#fa8c16" },
    { value: "bathroom", label: "Nhà vệ sinh", color: "#722ed1" },
    { value: "balcony", label: "Ban công", color: "#13c2c2" },
    { value: "corridor", label: "Hành lang", color: "#fadb14" },
    { value: "storage", label: "Kho chứa", color: "#ff4d4f" },
    { value: "office", label: "Văn phòng", color: "#eb2f96" },
  ];

  // Save state to history
  const saveToHistory = (newPolygons) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.stringify(newPolygons || polygons));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Undo
  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setPolygons(JSON.parse(history[newIndex]));
    }
  };

  // Redo
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setPolygons(JSON.parse(history[newIndex]));
    }
  };

  // Load image
  const loadImage = (file) => {
    return new Promise((resolve, reject) => {
      setLoading(true);

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          // Reset state khi load ảnh mới
          setPolygons([]);
          setCurrentPolygon([]);
          setIsDrawing(false);
          setSelectedPolygonId(null);
          setZoom(1);
          setOffset({ x: 0, y: 0 });
          setHistory([]);
          setHistoryIndex(-1);

          // Lưu thông tin ảnh gốc
          const naturalWidth = img.naturalWidth;
          const naturalHeight = img.naturalHeight;

          // Tính scale để fit container
          const container = containerRef.current;
          const containerWidth = container ? container.clientWidth - 40 : 800;
          const containerHeight = container ? container.clientHeight - 40 : 600;

          const scaleX = containerWidth / naturalWidth;
          const scaleY = containerHeight / naturalHeight;
          const displayScale = Math.min(scaleX, scaleY, 1);

          const displayWidth = naturalWidth * displayScale;
          const displayHeight = naturalHeight * displayScale;

          setImageInfo({
            url: e.target.result,
            naturalWidth,
            naturalHeight,
            displayWidth,
            displayHeight,
            originalScale: displayScale,
          });

          setScale(displayScale);
          imageRef.current = img;

          setLoading(false);
          resolve();
        };

        img.onerror = () => {
          setLoading(false);
          reject(new Error("Không thể load ảnh"));
        };

        img.src = e.target.result;
      };

      reader.onerror = () => {
        setLoading(false);
        reject(new Error("Không thể đọc file"));
      };

      reader.readAsDataURL(file);
    });
  };

  // Handle file upload
  const handleFileUpload = (file) => {
    loadImage(file)
      .then(() => {
        message.success("Đã load ảnh thành công");
      })
      .catch((error) => {
        message.error("Lỗi: " + error.message);
      });

    return false; // Prevent default upload
  };

  // Convert display coordinates to natural coordinates
  const displayToNatural = (displayX, displayY) => {
    if (!imageInfo) return { x: 0, y: 0 };

    // Tính toán với offset và zoom
    const actualX = (displayX - offset.x) / zoom;
    const actualY = (displayY - offset.y) / zoom;

    // Convert to natural coordinates
    const naturalX = actualX / scale;
    const naturalY = actualY / scale;

    return {
      x: Math.round(naturalX * 100) / 100,
      y: Math.round(naturalY * 100) / 100,
    };
  };

  // Convert natural coordinates to display coordinates
  const naturalToDisplay = (naturalX, naturalY) => {
    if (!imageInfo) return { x: 0, y: 0 };

    // Convert to display coordinates
    const displayX = naturalX * scale;
    const displayY = naturalY * scale;

    // Apply zoom and offset
    const actualX = displayX * zoom + offset.x;
    const actualY = displayY * zoom + offset.y;

    return { x: actualX, y: actualY };
  };

  // Get mouse position relative to canvas
  const getMousePos = (canvas, e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  };

  // Handle canvas click
  const handleCanvasClick = (e) => {
    if (!imageInfo || loading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const mousePos = getMousePos(canvas, e);

    if (isDrawing) {
      // Check if clicking near the first point to close polygon
      if (currentPolygon.length > 2) {
        const firstPoint = currentPolygon[0];
        const displayFirst = naturalToDisplay(firstPoint.x, firstPoint.y);
        const distance = Math.sqrt(
          Math.pow(mousePos.x - displayFirst.x, 2) +
            Math.pow(mousePos.y - displayFirst.y, 2)
        );

        if (distance < 10) {
          // Close polygon
          completePolygon();
          return;
        }
      }

      // Add new point
      const naturalPoint = displayToNatural(mousePos.x, mousePos.y);
      setCurrentPolygon((prev) => [...prev, naturalPoint]);
    } else {
      // Start new polygon
      const naturalPoint = displayToNatural(mousePos.x, mousePos.y);
      setCurrentPolygon([naturalPoint]);
      setIsDrawing(true);
    }
  };

  // Complete polygon
  const completePolygon = () => {
    if (currentPolygon.length < 3) {
      message.warning("Cần ít nhất 3 điểm để tạo polygon");
      return;
    }

    const newPolygon = {
      id: `polygon-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      points: [...currentPolygon],
      color: polygonColor,
      name: `${polygonName} ${polygons.length + 1}`,
      type: polygonType,
      fillOpacity,
      strokeWidth,
      visible: true,
    };

    saveToHistory([...polygons, newPolygon]);
    setPolygons((prev) => [...prev, newPolygon]);
    setCurrentPolygon([]);
    setIsDrawing(false);
    setPolygonName("Phòng ");

    message.success(`Đã tạo ${newPolygon.name}`);
  };

  // Cancel drawing
  const cancelDrawing = () => {
    setCurrentPolygon([]);
    setIsDrawing(false);
  };

  // Delete polygon
  const deletePolygon = (id) => {
    const newPolygons = polygons.filter((p) => p.id !== id);
    saveToHistory(newPolygons);
    setPolygons(newPolygons);

    if (selectedPolygonId === id) {
      setSelectedPolygonId(null);
    }

    message.success("Đã xóa polygon");
  };

  // Toggle polygon visibility
  const togglePolygonVisibility = (id) => {
    const newPolygons = polygons.map((p) =>
      p.id === id ? { ...p, visible: !p.visible } : p
    );
    saveToHistory(newPolygons);
    setPolygons(newPolygons);
  };

  // Update polygon color
  const updatePolygonColor = (id, color) => {
    const newPolygons = polygons.map((p) =>
      p.id === id ? { ...p, color: color.hex || color } : p
    );
    saveToHistory(newPolygons);
    setPolygons(newPolygons);
  };

  // Update polygon name
  const updatePolygonName = (id, name) => {
    const newPolygons = polygons.map((p) => (p.id === id ? { ...p, name } : p));
    saveToHistory(newPolygons);
    setPolygons(newPolygons);
  };

  // Select polygon
  const selectPolygon = (e, polygonId) => {
    e.stopPropagation();
    setSelectedPolygonId(polygonId);
  };

  // Draw on canvas
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imageInfo) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    if (showGrid && zoom >= 2) {
      ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
      ctx.lineWidth = 1;

      const gridSize = 20 * zoom;
      const startX = offset.x % gridSize;
      const startY = offset.y % gridSize;

      // Vertical lines
      for (let x = startX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = startY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    // Draw image with zoom and offset
    ctx.save();
    ctx.translate(offset.x, offset.y);
    ctx.scale(zoom, zoom);

    // Draw image
    const displayWidth = imageInfo.displayWidth;
    const displayHeight = imageInfo.displayHeight;
    ctx.drawImage(imageRef.current, 0, 0, displayWidth, displayHeight);
    ctx.restore();

    // Draw polygons
    polygons.forEach((polygon) => {
      if (!polygon.visible) return;

      ctx.save();
      ctx.translate(offset.x, offset.y);
      ctx.scale(zoom, zoom);

      if (polygon.points.length > 0) {
        // Draw fill
        ctx.fillStyle = polygon.color
          .replace(")", `, ${polygon.fillOpacity})`)
          .replace("rgb", "rgba");
        ctx.beginPath();

        const firstPoint = naturalToDisplay(
          polygon.points[0].x,
          polygon.points[0].y
        );
        ctx.moveTo(firstPoint.x / zoom, firstPoint.y / zoom);

        polygon.points.forEach((point, index) => {
          if (index === 0) return;
          const displayPoint = naturalToDisplay(point.x, point.y);
          ctx.lineTo(displayPoint.x / zoom, displayPoint.y / zoom);
        });

        ctx.closePath();
        ctx.fill();

        // Draw border
        ctx.strokeStyle = polygon.color;
        ctx.lineWidth = polygon.strokeWidth / zoom;
        ctx.stroke();

        // Draw points
        if (polygon.id === selectedPolygonId) {
          polygon.points.forEach((point) => {
            const displayPoint = naturalToDisplay(point.x, point.y);
            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = polygon.color;
            ctx.lineWidth = 2 / zoom;

            ctx.beginPath();
            ctx.arc(
              displayPoint.x / zoom,
              displayPoint.y / zoom,
              6 / zoom,
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.stroke();
          });
        }

        // Draw label
        if (polygon.points.length >= 3) {
          // Calculate center point
          let sumX = 0,
            sumY = 0;
          polygon.points.forEach((point) => {
            const displayPoint = naturalToDisplay(point.x, point.y);
            sumX += displayPoint.x / zoom;
            sumY += displayPoint.y / zoom;
          });

          const centerX = sumX / polygon.points.length;
          const centerY = sumY / polygon.points.length;

          // Draw background for text
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.strokeStyle = polygon.color;
          ctx.lineWidth = 1 / zoom;

          const text = polygon.name;
          ctx.font = `${14 / zoom}px Arial`;
          const textWidth = ctx.measureText(text).width;

          ctx.beginPath();
          ctx.roundRect(
            centerX - textWidth / 2 - 5 / zoom,
            centerY - 10 / zoom,
            textWidth + 10 / zoom,
            20 / zoom,
            3 / zoom
          );
          ctx.fill();
          ctx.stroke();

          // Draw text
          ctx.fillStyle = "#000000";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(text, centerX, centerY);
        }
      }

      ctx.restore();
    });

    // Draw current polygon being drawn
    if (isDrawing && currentPolygon.length > 0) {
      ctx.save();
      ctx.translate(offset.x, offset.y);
      ctx.scale(zoom, zoom);

      ctx.fillStyle = polygonColor
        .replace(")", `, ${fillOpacity})`)
        .replace("rgb", "rgba");
      ctx.strokeStyle = polygonColor;
      ctx.lineWidth = strokeWidth / zoom;
      ctx.setLineDash([5 / zoom, 5 / zoom]);

      ctx.beginPath();

      currentPolygon.forEach((point, index) => {
        const displayPoint = naturalToDisplay(point.x, point.y);
        if (index === 0) {
          ctx.moveTo(displayPoint.x / zoom, displayPoint.y / zoom);
        } else {
          ctx.lineTo(displayPoint.x / zoom, displayPoint.y / zoom);
        }
      });

      if (currentPolygon.length > 1) {
        ctx.stroke();
      }

      // Draw points
      currentPolygon.forEach((point) => {
        const displayPoint = naturalToDisplay(point.x, point.y);
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = polygonColor;
        ctx.lineWidth = 2 / zoom;

        ctx.beginPath();
        ctx.arc(
          displayPoint.x / zoom,
          displayPoint.y / zoom,
          5 / zoom,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
      });

      ctx.restore();
    }
  };

  // Handle mouse wheel for zoom
  const handleWheel = (e) => {
    if (!imageInfo) return;

    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.1, Math.min(5, zoom * delta));

    // Zoom to mouse position
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate new offset to zoom to mouse position
      const newOffsetX = mouseX - (mouseX - offset.x) * (newZoom / zoom);
      const newOffsetY = mouseY - (mouseY - offset.y) * (newZoom / zoom);

      setZoom(newZoom);
      setOffset({ x: newOffsetX, y: newOffsetY });
    }
  };

  // Handle mouse down for panning
  const handleMouseDown = (e) => {
    if (e.button === 1 || (e.button === 0 && e.ctrlKey)) {
      setIsPanning(true);
      setPanStart({ x: e.clientX, y: e.clientY });
      e.preventDefault();
    }
  };

  // Handle mouse move for panning
  const handleMouseMove = (e) => {
    if (isPanning) {
      const dx = e.clientX - panStart.x;
      const dy = e.clientY - panStart.y;

      setOffset((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));

      setPanStart({ x: e.clientX, y: e.clientY });
    }
  };

  // Handle mouse up for panning
  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Reset view
  const resetView = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  // Fit image to view
  const fitToView = () => {
    if (!imageInfo || !containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.clientWidth - 40;
    const containerHeight = container.clientHeight - 40;

    const scaleX = containerWidth / imageInfo.displayWidth;
    const scaleY = containerHeight / imageInfo.displayHeight;
    const newZoom = Math.min(scaleX, scaleY);

    const newOffsetX = (containerWidth - imageInfo.displayWidth * newZoom) / 2;
    const newOffsetY =
      (containerHeight - imageInfo.displayHeight * newZoom) / 2;

    setZoom(newZoom);
    setOffset({ x: newOffsetX, y: newOffsetY });
  };

  // Export polygons
  const exportPolygons = () => {
    if (polygons.length === 0) {
      message.warning("Chưa có polygon nào để export");
      return;
    }

    const exportData = {
      imageInfo: {
        naturalWidth: imageInfo.naturalWidth,
        naturalHeight: imageInfo.naturalHeight,
        scale: scale,
      },
      polygons: polygons.map((p) => ({
        ...p,
        // Ensure we have original points
        points: p.points,
      })),
      exportedAt: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const link = document.createElement("a");
    link.setAttribute("href", dataUri);
    link.setAttribute(
      "download",
      `floor-plan-polygons-${new Date().getTime()}.json`
    );
    link.click();

    message.success(`Đã export ${polygons.length} polygon`);
  };

  // Import polygons
  const importPolygons = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);

        if (data.polygons && data.imageInfo) {
          setPolygons(data.polygons);
          message.success(`Đã import ${data.polygons.length} polygon`);
        } else {
          message.error("File không đúng định dạng");
        }
      } catch (error) {
        message.error("Không thể đọc file JSON");
      }
    };

    reader.readAsText(file);
    return false;
  };

  // Take screenshot
  const takeScreenshot = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = `floor-plan-${new Date().getTime()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    message.success("Đã lưu ảnh");
  };

  // Calculate polygon area
  const calculatePolygonArea = (points) => {
    if (points.length < 3) return 0;

    let area = 0;
    for (let i = 0; i < points.length; i++) {
      const j = (i + 1) % points.length;
      area += points[i].x * points[j].y;
      area -= points[j].x * points[i].y;
    }

    return Math.abs(area / 2);
  };

  // Effect to draw canvas
  useEffect(() => {
    drawCanvas();
  }, [
    imageInfo,
    polygons,
    currentPolygon,
    isDrawing,
    zoom,
    offset,
    showGrid,
    selectedPolygonId,
  ]);

  // Effect to handle resize
  useEffect(() => {
    const handleResize = () => {
      drawCanvas();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Card
        title={
          <Space>
            <FileImageOutlined />
            <span>Floor Plan Polygon Editor</span>
            {imageInfo && (
              <span className="text-sm text-gray-500">
                ({imageInfo.naturalWidth} × {imageInfo.naturalHeight})
              </span>
            )}
          </Space>
        }
        extra={
          <Space>
            <Tooltip title="Undo">
              <Button
                icon={<UndoOutlined />}
                onClick={handleUndo}
                disabled={historyIndex <= 0}
              />
            </Tooltip>
            <Tooltip title="Redo">
              <Button
                icon={<RedoOutlined />}
                onClick={handleRedo}
                disabled={historyIndex >= history.length - 1}
              />
            </Tooltip>
            <Tooltip title="Reset View">
              <Button icon={<FullscreenOutlined />} onClick={resetView} />
            </Tooltip>
          </Space>
        }
      >
        <Row gutter={[16, 16]}>
          {/* Left Panel - Controls */}
          <Col xs={24} md={8}>
            <Card size="small" title="Upload Ảnh" className="mb-4">
              <Space direction="vertical" style={{ width: "100%" }}>
                <Upload
                  beforeUpload={handleFileUpload}
                  showUploadList={false}
                  accept=".png,.jpg,.jpeg,.webp"
                  maxCount={1}
                >
                  <Button
                    icon={<UploadOutlined />}
                    type="primary"
                    block
                    disabled={loading}
                  >
                    {loading ? "Đang load..." : "Chọn Ảnh Floor Plan"}
                  </Button>
                </Upload>

                <Upload
                  beforeUpload={importPolygons}
                  showUploadList={false}
                  accept=".json"
                >
                  <Button icon={<DownloadOutlined />} block>
                    Import Polygons
                  </Button>
                </Upload>

                {imageInfo && (
                  <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                    <div>
                      Kích thước gốc: {imageInfo.naturalWidth} ×{" "}
                      {imageInfo.naturalHeight}
                    </div>
                    <div>Scale: {scale.toFixed(4)}</div>
                  </div>
                )}
              </Space>
            </Card>

            <Card size="small" title="Vẽ Polygon" className="mb-4">
              <Space direction="vertical" style={{ width: "100%" }}>
                <div>
                  <label className="text-sm font-medium">Tên phòng</label>
                  <Input
                    value={polygonName}
                    onChange={(e) => setPolygonName(e.target.value)}
                    placeholder="Nhập tên phòng"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Loại phòng</label>
                  <Select
                    value={polygonType}
                    onChange={setPolygonType}
                    style={{ width: "100%" }}
                    onSelect={(value) => {
                      setPolygonColor(colorPalette[value]);
                    }}
                  >
                    {roomTypes.map((type) => (
                      <Option key={type.value} value={type.value}>
                        <Space>
                          <div
                            style={{
                              width: 12,
                              height: 12,
                              backgroundColor: type.color,
                              borderRadius: 2,
                            }}
                          />
                          {type.label}
                        </Space>
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Màu sắc
                    <span
                      style={{
                        display: "inline-block",
                        width: 20,
                        height: 20,
                        backgroundColor: polygonColor,
                        marginLeft: 8,
                        verticalAlign: "middle",
                        border: "1px solid #d9d9d9",
                        borderRadius: 4,
                      }}
                    />
                  </label>
                  <ColorPicker
                    value={polygonColor}
                    onChange={(color) => setPolygonColor(color.hex || color)}
                    showText
                    style={{ width: "100%" }}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Độ trong suốt: {(fillOpacity * 100).toFixed(0)}%
                  </label>
                  <Slider
                    min={0.1}
                    max={1}
                    step={0.1}
                    value={fillOpacity}
                    onChange={setFillOpacity}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Độ dày viền: {strokeWidth}px
                  </label>
                  <Slider
                    min={1}
                    max={10}
                    value={strokeWidth}
                    onChange={setStrokeWidth}
                  />
                </div>

                <Space style={{ width: "100%" }}>
                  <Button
                    type="primary"
                    icon={<CheckOutlined />}
                    onClick={completePolygon}
                    disabled={!isDrawing || currentPolygon.length < 2}
                    block
                  >
                    Hoàn Thành
                  </Button>

                  <Button
                    icon={<CloseOutlined />}
                    onClick={cancelDrawing}
                    disabled={!isDrawing}
                    block
                  >
                    Hủy
                  </Button>
                </Space>

                <div className="text-sm text-gray-500">
                  <InfoCircleOutlined /> Hướng dẫn:
                  <ul className="mt-1 ml-4">
                    <li>Click để thêm điểm</li>
                    <li>Click điểm đầu để đóng polygon</li>
                    <li>Giữ Ctrl + Drag để pan</li>
                    <li>Scroll để zoom</li>
                  </ul>
                </div>
              </Space>
            </Card>

            <Card size="small" title="Công Cụ" className="mb-4">
              <Space wrap style={{ width: "100%" }}>
                <Tooltip title="Show Grid">
                  <Switch
                    checked={showGrid}
                    onChange={setShowGrid}
                    checkedChildren={<EyeOutlined />}
                    unCheckedChildren={<EyeInvisibleOutlined />}
                  />
                </Tooltip>

                <Tooltip title="Fit to View">
                  <Button icon={<FullscreenOutlined />} onClick={fitToView} />
                </Tooltip>

                <Tooltip title="Zoom In">
                  <Button
                    icon={<ZoomInOutlined />}
                    onClick={() => setZoom((prev) => Math.min(5, prev * 1.2))}
                  />
                </Tooltip>

                <Tooltip title="Zoom Out">
                  <Button
                    icon={<ZoomOutOutlined />}
                    onClick={() => setZoom((prev) => Math.max(0.1, prev * 0.8))}
                  />
                </Tooltip>
              </Space>
            </Card>

            <Card size="small" title="Danh Sách Polygons" className="mb-4">
              {polygons.length === 0 ? (
                <div className="text-center text-gray-500 py-4">
                  Chưa có polygon nào
                </div>
              ) : (
                <div style={{ maxHeight: 300, overflowY: "auto" }}>
                  {polygons.map((polygon) => (
                    <div
                      key={polygon.id}
                      className={`p-2 mb-2 rounded border cursor-pointer transition-all ${
                        selectedPolygonId === polygon.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      onClick={(e) => selectPolygon(e, polygon.id)}
                    >
                      <div className="flex items-center justify-between">
                        <Space>
                          <Switch
                            size="small"
                            checked={polygon.visible}
                            onChange={() => togglePolygonVisibility(polygon.id)}
                          />
                          <div
                            style={{
                              width: 12,
                              height: 12,
                              backgroundColor: polygon.color,
                              borderRadius: 2,
                            }}
                          />
                          <span className="font-medium">{polygon.name}</span>
                        </Space>
                        <Space>
                          <Tooltip title="Đổi màu">
                            <ColorPicker
                              value={polygon.color}
                              onChange={(color) =>
                                updatePolygonColor(polygon.id, color)
                              }
                              size="small"
                            >
                              <Button
                                type="text"
                                size="small"
                                icon={<EditOutlined />}
                              />
                            </ColorPicker>
                          </Tooltip>
                          <Tooltip title="Xóa">
                            <Button
                              type="text"
                              size="small"
                              danger
                              icon={<DeleteOutlined />}
                              onClick={(e) => {
                                e.stopPropagation();
                                deletePolygon(polygon.id);
                              }}
                            />
                          </Tooltip>
                        </Space>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {polygon.type} • {polygon.points.length} điểm
                        {polygon.area && ` • ${polygon.area.toFixed(2)} m²`}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <Card size="small" title="Export">
              <Space direction="vertical" style={{ width: "100%" }}>
                <Button
                  icon={<DownloadOutlined />}
                  onClick={exportPolygons}
                  disabled={polygons.length === 0}
                  block
                >
                  Export JSON ({polygons.length})
                </Button>

                <Button
                  icon={<SaveOutlined />}
                  onClick={takeScreenshot}
                  disabled={!imageInfo}
                  block
                >
                  Save as Image
                </Button>
              </Space>
            </Card>
          </Col>

          {/* Right Panel - Canvas */}
          <Col xs={24} md={16}>
            <div
              ref={containerRef}
              className="border border-gray-300 rounded-lg bg-white relative"
              style={{
                minHeight: 600,
                overflow: "hidden",
                cursor: isPanning
                  ? "grabbing"
                  : isDrawing
                  ? "crosshair"
                  : "grab",
              }}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {!imageInfo ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                  <UploadOutlined style={{ fontSize: 48, marginBottom: 16 }} />
                  <div className="text-lg mb-2">Chưa có ảnh</div>
                  <div className="text-sm">
                    Vui lòng upload ảnh floor plan để bắt đầu
                  </div>
                </div>
              ) : (
                <>
                  <canvas
                    ref={canvasRef}
                    width={containerRef.current?.clientWidth || 800}
                    height={containerRef.current?.clientHeight || 600}
                    onClick={handleCanvasClick}
                    style={{
                      display: "block",
                      backgroundColor: "#fafafa",
                    }}
                  />

                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    Zoom: {(zoom * 100).toFixed(0)}% | Polygons:{" "}
                    {polygons.length} |{isDrawing ? " Đang vẽ..." : " Sẵn sàng"}
                  </div>
                </>
              )}

              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                  <Spin size="large" tip="Đang load ảnh..." />
                </div>
              )}
            </div>

            {imageInfo && (
              <div className="mt-4 text-sm text-gray-600">
                <Space wrap>
                  <span>🖱️ Click: Vẽ điểm | Ctrl+Drag: Pan | Scroll: Zoom</span>
                  <span>•</span>
                  <span>Đang vẽ: {currentPolygon.length} điểm</span>
                  <span>•</span>
                  <span>
                    Offset: {offset.x.toFixed(0)}, {offset.y.toFixed(0)}
                  </span>
                </Space>
              </div>
            )}
          </Col>
        </Row>
      </Card>

      {/* Floating buttons */}
      <FloatButton.Group shape="square" style={{ right: 24 }}>
        <FloatButton
          icon={<InfoCircleOutlined />}
          tooltip="Thông tin"
          onClick={() => {
            Modal.info({
              title: "Hướng dẫn sử dụng",
              width: 600,
              content: (
                <div>
                  <p>
                    <strong>1. Upload ảnh:</strong> Chọn ảnh floor plan
                  </p>
                  <p>
                    <strong>2. Vẽ polygon:</strong> Click để thêm điểm, click
                    điểm đầu để đóng
                  </p>
                  <p>
                    <strong>3. Điều khiển:</strong>
                  </p>
                  <ul>
                    <li>Giữ Ctrl + Drag: Pan (di chuyển)</li>
                    <li>Scroll: Zoom in/out</li>
                    <li>Double click: Fit to view</li>
                  </ul>
                  <p>
                    <strong>4. Lưu ý:</strong> Tọa độ được lưu theo kích thước
                    gốc của ảnh, không phụ thuộc vào zoom/hiển thị
                  </p>
                </div>
              ),
            });
          }}
        />
        <FloatButton
          icon={<ClearOutlined />}
          tooltip="Xóa tất cả"
          onClick={() => {
            Modal.confirm({
              title: "Xác nhận xóa",
              content: `Bạn có chắc muốn xóa tất cả ${polygons.length} polygon?`,
              onOk: () => {
                setPolygons([]);
                setCurrentPolygon([]);
                setIsDrawing(false);
                saveToHistory([]);
                message.success("Đã xóa tất cả polygon");
              },
            });
          }}
        />
      </FloatButton.Group>
    </div>
  );
};

export default FloorPlanEditor;
