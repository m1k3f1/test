package mx.danavis.akin.followers;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class ToptenController {
	
	@ModelAttribute("module")
	String module() {
		return "followers";
	}
	
	@ModelAttribute("page")
	String page() {
		return "followersTopten";
	}
	
	@GetMapping("followersTopten")
	String followersTopten(Principal principal) {
		return "followers/followersTopten";
	}

}
