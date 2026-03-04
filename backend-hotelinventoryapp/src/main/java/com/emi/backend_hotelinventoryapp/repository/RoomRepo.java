package com.emi.backend_hotelinventoryapp.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emi.backend_hotelinventoryapp.entity.Room;

public interface RoomRepo extends JpaRepository<Room, UUID>{
  
}
