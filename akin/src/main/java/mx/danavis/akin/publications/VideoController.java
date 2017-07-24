package mx.danavis.akin.publications;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class VideoController {
	
	@ModelAttribute("module")
	String module() {
		return "publications";
	}
	
	@ModelAttribute("page")
	String page() {
		return "video";
	}

	@GetMapping("video")
	String publications(Principal principal) {
		return "publications/video";
	}

}
