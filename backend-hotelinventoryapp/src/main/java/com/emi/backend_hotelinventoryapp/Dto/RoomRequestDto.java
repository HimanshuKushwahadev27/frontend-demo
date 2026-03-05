package com.emi.backend_hotelinventoryapp.Dto;

import java.math.BigDecimal;
import java.time.Instant;

public record RoomRequestDto(
String roomType,
String amenities,
BigDecimal price,
String url,
Instant checkOutTime,
Integer ratings

) {
  
}
