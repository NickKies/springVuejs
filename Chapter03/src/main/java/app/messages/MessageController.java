package app.messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/messages")
public class MessageController {

    private MessageService messageService;

    public MessageController(MessageService messageService) { this.messageService = messageService; }

    /*@RequestMapping(value = "/welecome", method = RequestMethod.GET)*/
    @GetMapping("/welcome") // GetMapping으로 사용해도 된다.
    public String welcome(Model model) {
        model.addAttribute("message", "안녕 스프링부트야!");
        return "welcome";
    }

/*    @GetMapping("/welcome")
    public ModelAndView welecome() {
        ModelAndView mv = new ModelAndView("welcome");
        mv.addObject("message", "안녕 스프링부트야!");
        return mv;
    }*/

    @PostMapping("")
    @ResponseBody
    public ResponseEntity<Message> saveMessage(@RequestBody MessageData data) {
        Message saved = messageService.save(data.getText());

        if ( saved == null ) {
            return ResponseEntity.status(500).build();
        }

        return ResponseEntity.ok(saved);
    }
}
