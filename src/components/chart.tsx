// src/components/Chart.tsx
const chart = ({ path, title }: { path: string, title: string }) => {
  return (
    <div style={{ width: "100%", height: "550px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
      <iframe 
        src={path} 
        title={title} 
        width="100%" 
        height="500px" 
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default chart;