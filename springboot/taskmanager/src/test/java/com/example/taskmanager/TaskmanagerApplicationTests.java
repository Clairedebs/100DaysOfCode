package com.example.taskmanager;

import com.example.taskmanager.models.TasksDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TaskmanagerApplicationTests {

    @Autowired
    TestRestTemplate restTemplate;

    @Autowired


    @Test
    void contextLoads() {
    }

    @Test
    void shouldReturnAllTasks(){
        ResponseEntity<String> response = restTemplate.getForEntity("/api/tasks", String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void shouldReturnTaskById(){
        ResponseEntity<String> response = restTemplate.getForEntity("/api/tasks/24", String.class);;
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

        ResponseEntity<String> response2 = restTemplate.getForEntity("/api/tasks/7899", String.class);
        assertThat(response2.getStatusCode().is4xxClientError()).isTrue();
    }

    @Test
    void createTask(){
        TasksDTO tasksDTO = TasksDTO.builder().title("Manger").description("Dormir,Boire").status("ONGOING").build();
        ResponseEntity<String> response = restTemplate.postForEntity("/api/tasks", tasksDTO, String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);

        TasksDTO tasksDTO1 = TasksDTO.builder().description("Manger").build();
        ResponseEntity<String> response1 = restTemplate.postForEntity("/api/tasks", tasksDTO1, String.class);
        assertThat(response1.getStatusCode().is4xxClientError()).isTrue();

    }

}
