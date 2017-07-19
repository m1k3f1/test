package mx.danavis.akin.followers;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class FollowersController {
	
	private String module;
	
	@ModelAttribute("module")
	String module() {
		return module;
	}

	@GetMapping("followers")
	String followers(Principal principal) {
		module="followers";
		return "followers/followers";
	}
	
	@GetMapping("followersTopten")
	String followersTopten(Principal principal) {
		module="followers";
		return "followers/followersTopten";
	}

	@GetMapping("followersDemographic")
	String followersDemographic(Principal principal) {
		module="followers";
		return "followers/followersDemographic";
	}
}
