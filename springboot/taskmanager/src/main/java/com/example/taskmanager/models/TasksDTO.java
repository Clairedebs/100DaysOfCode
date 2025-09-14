package com.example.taskmanager.models;

import com.example.taskmanager.models.enums.Status;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class TasksDTO {
    private Long id;
    private String title;
    private String description;
    private Date dueDate;
    private String status;
}
