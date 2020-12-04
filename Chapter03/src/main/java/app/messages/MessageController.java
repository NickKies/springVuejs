package app.messages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/messages")
public class MessageController {
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
}
