package com.emi.backend_hotelinventoryapp.entity;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name ="room")
public class Room {
  
  @Id
  @GeneratedValue
  private UUID id;
  
  private String roomType;

  private String amenities;

  private BigDecimal price;

  private String url;

  private Instant checkInTime;

  private Instant checkOutTime; 


  private Integer ratings;
}
