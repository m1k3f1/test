package mx.danavis.akin.graphic;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class GraphicRestController {
	
	
	@RequestMapping("/rest/generateGraphic")
    public List<Graphic> greeting(@RequestParam(value="id", defaultValue="1") String id,
    						@RequestParam(value="dato", defaultValue="1") String dato) {
		
		List<Graphic> listGraphic = new ArrayList<Graphic>();
		for(int i=0;i<3;i++){
			
			Graphic graphic = new Graphic();
			graphic.setCuenta("dato "+dato+" id "+id+" consecutivo"+i);
			graphic.setLike(5+i);
			graphic.setSad(3+i);
			graphic.setSurprise(4+i);
			listGraphic.add(graphic);
		}
		
        return listGraphic;
    }

}
