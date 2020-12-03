package app.messages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/messages")
public class MessageController {
    /*@RequestMapping(value = "/welecome", method = RequestMethod.GET)*/
    @GetMapping("/welcome") // GetMapping으로 사용해도 된다.
    @ResponseBody
    public String welcome() {
        return "안녕 스프링부트야!";
    }
}
