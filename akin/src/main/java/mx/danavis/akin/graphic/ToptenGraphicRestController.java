package mx.danavis.akin.graphic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToptenGraphicRestController {
	
	@RequestMapping("/rest/drawGraphic")
	public List<Data> graphics(){
		
		List<Data> lstData = new ArrayList<Data>();
		List<Dataset> lstDataset = new ArrayList<Dataset>();
		Dataset datasetAcc1Seg1 = new Dataset();
		datasetAcc1Seg1.setData(new int[]{9});
		datasetAcc1Seg1.setFillColor("rgba(144,140,143,0.8)");
		datasetAcc1Seg1.setHighlightFill("rgba(144,144,143,0.75)");
		datasetAcc1Seg1.setHighlightStroke("rgba(144,144,143,1)");
		datasetAcc1Seg1.setStrokeColor("rgba(144,140,143,0.8)");
		datasetAcc1Seg1.setLabel("Pbp PB");
		
		Dataset datasetAcc1Seg2 = new Dataset();
		datasetAcc1Seg2.setData(new int[]{9});
		datasetAcc1Seg2.setFillColor("rgba(26,179,148,0.5)");
		datasetAcc1Seg2.setStrokeColor("rgba(144,140,143,0.8)");
		datasetAcc1Seg2.setHighlightFill("rgba(26,179,148,0.75)");
		datasetAcc1Seg2.setHighlightStroke("rgba(26,179,148,1)");
		datasetAcc1Seg2.setLabel("Maria Cruz Uscanga");
		
		Dataset datasetAcc1Seg3 = new Dataset();
		datasetAcc1Seg3.setLabel("Janie Jones");
		datasetAcc1Seg3.setFillColor("rgba(234,171,237,0.7)");
		datasetAcc1Seg3.setStrokeColor("rgba(216,111,221,0.7)");
		datasetAcc1Seg3.setHighlightFill("rgba(191,59,198,0.75)");
		datasetAcc1Seg3.setHighlightStroke("rgba(191,59,198,1)");
		datasetAcc1Seg3.setData(new int[]{7});
		
		Dataset datasetAcc1Seg4 = new Dataset();
		datasetAcc1Seg4.setLabel("Hector Cruz");
		datasetAcc1Seg4.setFillColor("rgba(123,70,209,0.5)");
		datasetAcc1Seg4.setStrokeColor("rgba(123,70,209,0.8)");
		datasetAcc1Seg4.setHighlightFill("rgba(123,70,209,0.75)");
		datasetAcc1Seg4.setHighlightStroke("rgba(123,70,209,1)");
		datasetAcc1Seg4.setData(new int[]{7});
		
		Dataset datasetAcc1Seg5 = new Dataset();
		datasetAcc1Seg5.setLabel("Misael Ochoa Matuz");
		datasetAcc1Seg5.setFillColor("rgba(87,82,234,0.5)");
		datasetAcc1Seg5.setStrokeColor("rgba(87,82,234,0.8)");
		datasetAcc1Seg5.setHighlightFill("rgba(87,82,234,0.75)");
		datasetAcc1Seg5.setHighlightStroke("rgba(87,82,234,1)");
		datasetAcc1Seg5.setData(new int[]{6});
	
		lstDataset.add(datasetAcc1Seg1);
		lstDataset.add(datasetAcc1Seg2);
		lstDataset.add(datasetAcc1Seg3);
		lstDataset.add(datasetAcc1Seg4);
		
		
		Data data = new Data();
		data.setLabels(new ArrayList(Arrays.asList("Ricardo Anaya Cortés")));
		data.setDatasets(lstDataset);
		
		lstData.add(data);
		return lstData;
	}

}
