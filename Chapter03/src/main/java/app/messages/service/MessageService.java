package app.messages.service;

import app.messages.model.Message;
import app.messages.repository.MessageRepository;
import app.messages.security.SecurityCheck;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class MessageService {

    private static final Logger logger = LoggerFactory.getLogger(MessageService.class);

    private MessageRepository repository;

    public MessageService(MessageRepository repository) { this.repository = repository; }

    @SecurityCheck
    @Transactional(noRollbackFor = { UnsupportedOperationException.class })
    public Message save(String text) {
        Message message = repository.saveMessage(new Message(text));
        logger.debug("새로운 메세지[id={}] 저장", message.getId());
        updateStatistics();
        return repository.saveMessage(new Message(text));
    }

    private void updateStatistics() { throw new UnsupportedOperationException("이 메소드는 아직 구현되지 않았습니다."); }
}
