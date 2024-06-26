import cityData from "@/app/data/cityData"
import React, { ChangeEvent, KeyboardEvent, useState } from "react"

interface FlightCardProps {
    label: string
    initialValue: string
}

const FlightCard: React.FC<FlightCardProps> = ({ label, initialValue }) => {
    const [showInput, setShowInput] = useState(false)
    const [location, setLocation] = useState(initialValue)

    const handleClick = () => {
        setShowInput(true)
    }

    const handleBlur = () => {
        setShowInput(false)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value)
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setShowInput(false)
        }
    }

    const getFilteredItems = () => {
        return cityData
            .filter((item) =>
                item.city.toLowerCase().includes(location.toLowerCase()),
            )
            .sort((a, b) => a.city.localeCompare(b.city))
    }

    return (
        <div className="flight-card-container" style={{ position: "relative" }}>
            {showInput ? (
                <>
                    <input
                        className="flight-card px-3 py-1"
                        placeholder={label}
                        value={location}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        autoFocus
                    />
                    <div
                        className="dropdown-menu"
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            zIndex: 10,
                            width: "100%",
                        }}
                    >
                        {getFilteredItems().map((item) => (
                            <div
                                key={item.id}
                                className="dropdown-item px-3 py-1 hover:bg-gray-200"
                                onClick={() => {
                                    setLocation(item.city)
                                    setShowInput(false)
                                }}
                            >
                                <h3 className="text-sm uppercase text-gray-500">
                                    {item.id}
                                </h3>
                                <h2 className="text-xl font-bold">
                                    {item.city}
                                </h2>
                                <p className="text-gray-500">{item.airport}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div
                    onClick={handleClick}
                    className="flight-card h-fit px-3 py-1"
                >
                    <h3 className="text-sm uppercase text-gray-500">{label}</h3>
                    <h2 className="text-xl font-bold">{location}</h2>
                    <p className="text-gray-500">
                        {
                            cityData.find((item) => item.city === location)
                                ?.airport
                        }
                    </p>
                </div>
            )}
        </div>
    )
}

export default FlightCard
