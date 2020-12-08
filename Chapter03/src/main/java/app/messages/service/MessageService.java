package app.messages.service;

import app.messages.model.Message;
import app.messages.repository.MessageRepository;
import app.messages.security.SecurityCheck;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class MessageService {

    private static final Logger logger = LoggerFactory.getLogger(MessageService.class);

    private MessageRepository repository;

    public MessageService(MessageRepository repository) { this.repository = repository; }

    @Transactional(readOnly = true)
    public List<Message> getMessage() { return repository.getMessages(); }

    @SecurityCheck
    @Transactional
    public Message save(String text) { return repository.saveMessage(new Message(text)); }

}
