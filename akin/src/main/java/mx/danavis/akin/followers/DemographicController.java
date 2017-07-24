package mx.danavis.akin.followers;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class DemographicController {
	
	@ModelAttribute("module")
	String module() {
		return "followers";
	}
	
	@ModelAttribute("page")
	String page() {
		return "followersDemographic";
	}
	
	@GetMapping("followersDemographic")
	String followersDemographic(Principal principal) {
		return "followers/followersDemographic";
	}

}
