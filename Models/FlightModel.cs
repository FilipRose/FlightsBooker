namespace Flights.Models
{
    public record FlightModel(
        Guid Id,
        string Airline,
        string Price,
        TimePlaceModel Departure,
        TimePlaceModel Arrival,
        int numberOfSeats
    );
}