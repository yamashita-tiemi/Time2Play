package time2play;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Time2playController {
    @RequestMapping
    public String helloWorld() {
        return "Hello World!";
    }

    @RequestMapping("/goodbye")
    public String goodBye() {
        return "GoodBye World!";
    }
}
