export default function ZoneCard({ zone, isSelected, onSelect, hasActiveDisaster }) {
    const getRiskColor = (status) => {
        switch (status) {
            case "OK":
                return "bg-green-500";
            case "DEGRADED":
                return "bg-yellow-500";
            case "AT_RISK":
                return "bg-red-500";
            default:
                return "bg-gray-400";
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case "OK":
                return "✅ Network Stable";
            case "DEGRADED":
                return "⚠️ Degrading Performance";
            case "AT_RISK":
                return "🚨 Severely Degraded";
            default:
                return "Unknown";
        }
    };

    return (
        <div
            className={`
        relative p-6 rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer
        transform hover:scale-105 hover:shadow-xl
        ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-white bg-white'}
        ${hasActiveDisaster ? 'ring-4 ring-red-400 animate-pulse' : ''}
      `}
            onClick={() => onSelect(zone.id)}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{zone.name}</h3>
                    <p className="text-gray-500 text-sm">{zone.id}</p>
                </div>

                {/* Status Indicator */}
                <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getRiskColor(zone.metrics.status)}`}
                >
                    {zone.metrics.status}
                </div>
            </div>

            {/* Network health summary */}
            <div className="mb-4">
                <p className="text-gray-700 font-medium">
                    {getStatusLabel(zone.metrics.status)}
                </p>
            </div>

            {/* Core details */}
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-600">Population:</span>
                    <span className="font-semibold">{zone.population.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">Infrastructure:</span>
                    <span className="font-semibold">{zone.infrastructure}%</span>
                </div>
            </div>

            {/* Live Metrics */}
            <div className="mt-4 border-t border-gray-200 pt-3 text-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Network Metrics</h4>
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Latency:</span>
                        <span className="font-medium">{zone.metrics.latency} ms</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Download:</span>
                        <span className="font-medium">{zone.metrics.download} Mbps</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Upload:</span>
                        <span className="font-medium">{zone.metrics.upload} Mbps</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Packet Loss:</span>
                        <span className="font-medium">{zone.metrics.packetLoss}%</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Outage Risk:</span>
                        <span
                            className={`font-semibold ${
                                zone.metrics.predictedOutageRisk > 1
                                    ? "text-red-600"
                                    : zone.metrics.predictedOutageRisk > 0.5
                                        ? "text-yellow-600"
                                        : "text-green-600"
                            }`}
                        >
              {zone.metrics.predictedOutageRisk}
            </span>
                    </div>
                </div>
            </div>

            {/* Ping dot for selection */}
            {isSelected && (
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
            )}
        </div>
    );
}
