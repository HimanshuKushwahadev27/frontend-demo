package com.emi.backend_hotelinventoryapp.service;

import java.time.Instant;
import java.util.List;

import org.springframework.stereotype.Service;

import com.emi.backend_hotelinventoryapp.Dto.RoomRequestDto;
import com.emi.backend_hotelinventoryapp.Dto.RoomResponseDto;
import com.emi.backend_hotelinventoryapp.entity.Room;
import com.emi.backend_hotelinventoryapp.repository.RoomRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoomService {
  
  private final RoomRepo roomRepo;

  public void createRoom(RoomRequestDto request){
    Room room = new Room();
    room.setAmenities(request.amenities());
    room.setCheckOutTime(request.checkOutTime());
    room.setPrice(request.price());
    room.setRatings(request.ratings());
    room.setRoomType(request.roomType());
    room.setCheckInTime(Instant.now());
    room.setUrl(request.url());
    roomRepo.save(room);
  }

  public List<RoomResponseDto> getRooms(){
    List<Room> rooms = roomRepo.findAll();

    return rooms.stream().map(t -> 
      new RoomResponseDto(
        t.getId(),
        t.getRoomType(),
        t.getAmenities(),
        t.getPrice(),
        t.getUrl(),
        t.getCheckInTime(),
        t.getCheckOutTime(),
        t.getRatings()
      )
    ).toList();
  }
}
