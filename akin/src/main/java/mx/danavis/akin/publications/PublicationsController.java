package mx.danavis.akin.publications;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class PublicationsController {
	
	@ModelAttribute("module")
	String module() {
		return "publications";
	}

	@GetMapping("publications")
	String publications(Principal principal) {
		return "publications/publications";
	}

}
