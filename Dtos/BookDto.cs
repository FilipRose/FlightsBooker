namespace Flights.Dtos
{
    public record BookDto(Guid FlightId,
     string PassengerEamil,
     byte NumberOfSeats);
}
