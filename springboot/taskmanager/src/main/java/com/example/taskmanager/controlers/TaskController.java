package com.example.taskmanager.controlers;

import com.example.taskmanager.models.Tasks;
import com.example.taskmanager.models.TasksDTO;
import com.example.taskmanager.services.TaskService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    TaskService  taskService;

    @GetMapping
    public ResponseEntity<List<TasksDTO>> findAll() {
       List<TasksDTO> tasks  = taskService.getTasks();
       return ResponseEntity.ok().body(tasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TasksDTO> findById(@PathVariable Long id) {
        try {
            TasksDTO task = taskService.getTaskById(id);
            return ResponseEntity.ok().body(task);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<String> save(@Valid @RequestBody TasksDTO task) {
        taskService.addTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body("Tasks have been added !");
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody TasksDTO task) {
        try {
            taskService.updateTask(id, task);
            return ResponseEntity.ok().body("Task updated");
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        try {
            taskService.deleteTaskById(id);
            return ResponseEntity.ok().body("Task deleted !");
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
