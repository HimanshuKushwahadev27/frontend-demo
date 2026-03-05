package com.emi.backend_hotelinventoryapp.controller;

import java.net.ResponseCache;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emi.backend_hotelinventoryapp.Dto.RoomRequestDto;
import com.emi.backend_hotelinventoryapp.Dto.RoomResponseDto;
import com.emi.backend_hotelinventoryapp.service.RoomService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
public class RoomController {
  
  private final RoomService roomService;

  @PostMapping("/create")
  public ResponseEntity<String> createRoom(@RequestBody RoomRequestDto requestDto){
    roomService.createRoom(requestDto);
    return ResponseEntity.ok("room created");
  }

  @GetMapping("/get")
  public ResponseEntity<List<RoomResponseDto>> getRooms() {
      return ResponseEntity.ok(roomService.getRooms());
  }
  
}
