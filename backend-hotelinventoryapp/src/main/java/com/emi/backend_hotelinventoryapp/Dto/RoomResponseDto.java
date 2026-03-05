package com.emi.backend_hotelinventoryapp.Dto;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

public record RoomResponseDto(
  UUID id, 
  String roomType,
  String amenities,
  BigDecimal price,
  String url,
  Instant checkInTime,
  Instant checkOutTime,
  Integer ratings
) {
  
}
