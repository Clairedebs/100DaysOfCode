package com.example.taskmanager.models;

import com.example.taskmanager.models.enums.Status;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@Builder(toBuilder = true)
public class TasksDTO {
    private Long id;
    @NotBlank(message = "The title should not be blank")
    private String title;
    @NotBlank(message = "The description should not be blank")
    private String description;
    private Date dueDate;
    @NotBlank(message = "The blank should not be blank")
    private String status;
}
