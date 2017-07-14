package mx.danavis.akin.home;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class HomeController {

	@ModelAttribute("module")
	String module() {
		return "home";
	}

	@GetMapping("/")
	String index(Principal principal) {
		return principal != null ? "followers/followers" : "signin/signin";
	}
}
