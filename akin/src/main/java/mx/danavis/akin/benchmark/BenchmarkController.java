package mx.danavis.akin.benchmark;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class BenchmarkController {
	
	@ModelAttribute("module")
	String module() {
		return "benchmark";
	}

	@GetMapping("benchmark")
	String publications(Principal principal) {
		return "benchmark/benchmark";
	}


}
