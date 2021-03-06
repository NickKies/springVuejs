package app.messages.web;

import app.messages.model.Message;
import app.messages.service.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MessageController {

    private MessageService messageService;

    public MessageController(MessageService messageService) { this.messageService = messageService; }

    @GetMapping("/messages")
    public String index() {
        return "index";
    }

    @GetMapping("/api/messages")
    @ResponseBody
    public ResponseEntity<List<Message>> getMessage() {
        List<Message> messages = messageService.getMessage();
        return ResponseEntity.ok(messages);
    }

    @PostMapping("/api/messages")
    @ResponseBody
    public ResponseEntity<Message> saveMessage(@RequestBody MessageData data) {
        Message saved = messageService.save(data.getText());

        if ( saved == null ) {
            return ResponseEntity.status(500).build();
        }

        return ResponseEntity.ok(saved);
    }
}
