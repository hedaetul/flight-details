import FlightCard from "./flightCard" // Adjust the import path as necessary

const App = () => {
    return (
        <div className="flex gap-4">
            <FlightCard label="From" initialValue="Dhaka" />
            <FlightCard label="To" initialValue="Enter destination" />
        </div>
    )
}

export default App
