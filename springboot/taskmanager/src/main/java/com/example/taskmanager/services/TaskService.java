package com.example.taskmanager.services;

import com.example.taskmanager.exception.ExceptionHandlers.BadRequestException;
import com.example.taskmanager.exception.ExceptionHandlers.NotFoundException;
import com.example.taskmanager.mapper.TaskMapper;
import com.example.taskmanager.models.Tasks;
import com.example.taskmanager.models.TasksDTO;
import com.example.taskmanager.models.enums.Status;
import com.example.taskmanager.repositories.TaskRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private TaskMapper mapper;

    public List<TasksDTO> getTasks(){
        List<Tasks> tasks = taskRepository.findAll();
        return tasks.stream().map(mapper::toDTO).collect(Collectors.toList());
    }

    public TasksDTO getTaskById(Long id){
        Tasks tasks = taskRepository.findById(id).orElseThrow(
                () -> new NotFoundException("Task with id: " + id + " not found!")
        );
        return mapper.toDTO(tasks);
    }

    public void addTask(TasksDTO tasksDTO){
        Tasks task = mapper.toEntity(tasksDTO);
        task.setStatus(Status.TODO);
        taskRepository.save(task);
    }

    public void updateTask(Long id, TasksDTO task) {
        Tasks updatedTask = taskRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Task not found with id: " + id));
        if (task.getDescription() != null) {
            updatedTask.setDescription(task.getDescription());
        }
        if (task.getStatus() != null) {
          updatedTask.setStatus(Status.valueOf(task.getStatus()));
        }
        if (task.getDueDate() != null) {
            updatedTask.setDueDate(task.getDueDate());
        }
        taskRepository.save(updatedTask);
    }

    public void deleteTaskById(Long id){
        Tasks updatedTask = taskRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Task not found with id: " + id));
        taskRepository.delete(updatedTask);
    }
}
