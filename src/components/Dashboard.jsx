function DashboardCard({
  title,
  value,
  icon
}) {
  return (
    <div
      style={{
        background: 'white',
        padding: '25px',
        borderRadius: '18px',
        boxShadow:
          '0 4px 15px rgba(139,92,246,0.15)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h3>{title}</h3>
          <h1>{value}</h1>
        </div>

        <div
          style={{
            fontSize: '40px'
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  )
}

export default DashboardCard