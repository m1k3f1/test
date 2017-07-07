package mx.danavis.akin.followers;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class FollowersController {
	
	
	@ModelAttribute("module")
	String module() {
		return "followers";
	}

	@GetMapping("followers")
	String followers(Principal principal) {
		return "followers/followers";
	}


}
