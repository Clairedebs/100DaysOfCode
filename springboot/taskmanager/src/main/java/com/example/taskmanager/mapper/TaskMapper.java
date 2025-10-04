package com.example.taskmanager.mapper;

import com.example.taskmanager.models.Tasks;
import com.example.taskmanager.models.TasksDTO;
import com.example.taskmanager.models.enums.Priority;
import com.example.taskmanager.models.enums.Status;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

    public Tasks toEntity(TasksDTO tasksDTO){
        if (tasksDTO == null){
            return null;
        }
        Tasks tasks = new Tasks();
        if (tasksDTO.getStatus() != null) {
            tasks.setStatus(Status.valueOf(tasksDTO.getStatus()));
        }
        tasks.setTitle(tasksDTO.getTitle());
        tasks.setDescription(tasksDTO.getDescription());
        tasks.setDueDate(tasksDTO.getDueDate());
        if (tasksDTO.getPriority() != null) {
            tasks.setPriority(Priority.valueOf(tasksDTO.getPriority()));
        }
        return tasks;
    }

    public TasksDTO toDTO(Tasks tasks){
        if (tasks == null){
            return null;
        }
        TasksDTO tasksDTO = new TasksDTO();
        tasksDTO.setId(tasks.getId());
        tasksDTO.setTitle(tasks.getTitle());
        tasksDTO.setDescription(tasks.getDescription());
        tasksDTO.setDueDate(tasks.getDueDate());
        tasksDTO.setStatus(tasks.getStatus().toString());
        tasksDTO.setPriority(tasks.getPriority().toString());
        return tasksDTO;
    }
}
