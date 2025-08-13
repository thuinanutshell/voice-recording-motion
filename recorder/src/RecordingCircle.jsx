import "./RecordingCircle.css";

export default function RecordingCircle({ scale, opacity, isRecording }) {
  return (
    <div className="recording-wrapper">
      {/* Center volume-responsive circle */}
      <div
        className="recording-layer center"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: opacity
        }}
      ></div>

      {/* Outer filled circles only when recording */}
      {isRecording && (
        <>
          <div
            className="recording-layer layer1"
            style={{ transform: `translate(-50%, -50%) scale(${scale + 1.0})` }}
          ></div>
          <div
            className="recording-layer layer2"
            style={{ transform: `translate(-50%, -50%) scale(${scale + 2.0})` }}
          ></div>
          <div
            className="recording-layer layer3"
            style={{ transform: `translate(-50%, -50%) scale(${scale + 4.0})` }}
          ></div>
        </>
      )}
    </div>
  );
}
