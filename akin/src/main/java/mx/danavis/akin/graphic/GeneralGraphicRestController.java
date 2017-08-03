package mx.danavis.akin.graphic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.danavis.akin.enums.Accounts;

@RestController
public class GeneralGraphicRestController {

	private final String ACCOUNT1_FILL_COLOR="rgba(70,72,232,0.5)";
	private final String ACCOUNT1_STROKE_COLOR="gray";
	private final String ACCOUNT1_POINT_COLOR="rgba(70,72,232,1)";
	private final String ACCOUNT1_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT1_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT1_POINT_HIGHTLIGHT_STROKE="rgba(70,72,232,1)";
	private final String ACCOUNT1_HIGHTLIGHT_FILL="rgba(70,72,232,0.75)";
	private final String ACCOUNT1_HIGHTLIGHT_STROKE="rgba(70,72,232,1)";
	
	private final String ACCOUNT2_FILL_COLOR="rgba(26,179,148,0.5)";
	private final String ACCOUNT2_STROKE_COLOR="green";
	private final String ACCOUNT2_POINT_COLOR="rgba(26,179,148,1)";
	private final String ACCOUNT2_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT2_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT2_POINT_HIGHTLIGHT_STROKE="rgba(26,179,148,1)";
	private final String ACCOUNT2_HIGHTLIGHT_FILL="rgba(26,179,148,0.75)";
	private final String ACCOUNT2_HIGHTLIGHT_STROKE="rgba(26,179,148,1)";
	
	private final String ACCOUNT3_FILL_COLOR="rgba(181,84,237,0.7)";
	private final String ACCOUNT3_STROKE_COLOR="purple";
	private final String ACCOUNT3_POINT_COLOR="rgba(181,84,237,1)";
	private final String ACCOUNT3_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT3_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT3_POINT_HIGHTLIGHT_STROKE="rgba(181,84,237,1)";
	private final String ACCOUNT3_HIGHTLIGHT_FILL="rgba(181,84,237,0.75)";
	private final String ACCOUNT3_HIGHTLIGHT_STROKE="rgba(181,84,237,1)";
	
	@RequestMapping("/rest/drawFollowersGraphic")
	public List<Data> graphics(@RequestParam(value="period",defaultValue="MONTHLY") String period)
	{
		List<Data> lstData = new ArrayList<Data>();
		Data dataMontlyLineChart = new Data();
		Data dataTrimesterLineChart = new Data();
		Data dataSemesterLineChart = new Data();
		Data dataMontlyBarChart = new Data();
		Data dataTrimesterBarChart = new Data();
		Data dataSemesterBarChart = new Data();
		
		dataMontlyLineChart.setLabels(Arrays.asList("Semana 1", "Semana 2", "Semana 3", "Semana 4"));
		dataMontlyLineChart = fillingData(dataMontlyLineChart, Arrays.asList("Ricardo Anaya Cortés","Margarita Zavala","Rafael Moreno Valle"), 
				Arrays.asList(new int[]{169	,75	,363	,549},
							new int[]{172,	424	,603,	891},
							new int[]{1493	,1996, 4068	,2920}));
	
		dataTrimesterLineChart.setLabels(Arrays.asList("Mes 1", "Mes 2", "Mes 3"));
		dataTrimesterLineChart = fillingData(dataTrimesterLineChart, Arrays.asList("Ricardo Anaya Cortés","Margarita Zavala","Rafael Moreno Valle"), 
				Arrays.asList(new int[]{1882	,1215	,2017},
						new int[]{3835	,3521	,6345},
						new int[]{18857,	6027	,5619}));
		
		dataSemesterLineChart.setLabels(Arrays.asList("Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6"));
		dataSemesterLineChart = fillingData(dataSemesterLineChart, Arrays.asList("Ricardo Anaya Cortés","Margarita Zavala","Rafael Moreno Valle"),
				Arrays.asList(new int[]{1882,	1215,	2017	,2371	,3312	,2907},
						new int[]{3835	,3521	,6345	,6345	,8515	,23223},
						new int[]{18857,	6027,	5619	,6476	,9849	,8018}));
		
		dataMontlyBarChart.setLabels(Arrays.asList("Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"));
		dataMontlyBarChart = fillingData(dataMontlyBarChart, Arrays.asList("Hombres","Mujeres","Otros"), 
				Arrays.asList(new int[]{65, 59, 80},
						new int[]{28, 48, 40},
						new int[]{35, 68, 60}));
		
		dataTrimesterBarChart.setLabels(Arrays.asList("Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"));
		dataTrimesterBarChart = fillingData(dataTrimesterBarChart, Arrays.asList("Hombres","Mujeres","Otros"),
				Arrays.asList(new int[]{10, 34, 54},
						new int[]{44,22,48},
						new int[]{12, 27, 47}));
		
		dataSemesterBarChart.setLabels(Arrays.asList("Ricardo Anaya Cortés", "Margarita Zavala", "Rafael Moreno Valle"));
		dataSemesterBarChart = fillingData(dataSemesterBarChart, Arrays.asList("Hombres","Mujeres","Otros"),
				Arrays.asList(new int[]{2, 24, 15},
						new int[]{5, 11, 8},
						new int[]{3, 31, 18}));
		
		lstData.add(dataMontlyLineChart);
		lstData.add(dataTrimesterLineChart);
		lstData.add(dataSemesterLineChart);
		lstData.add(dataMontlyBarChart);
		lstData.add(dataTrimesterBarChart);
		lstData.add(dataSemesterBarChart);
		return lstData;
	}
	
	
	public Data fillingData(Data data,List<String> labels,List<int[]> datas)
	{
		List<Dataset> lstDataset = new ArrayList<Dataset>();
		for (int i = 0; i< labels.size(); i++) {
			Dataset dataset = new Dataset();
			dataset.setLabel(labels.get(i));
			dataset.setData(datas.get(i));
			dataset = setColorGraph(dataset, "ACCOUNT"+(i+1));
			
			lstDataset.add(dataset);
		}
		data.setDatasets(lstDataset);
		return data;
	}
	
	public Dataset setColorGraph(Dataset dataset,String account){
		if(Accounts.valueOf(account)  == Accounts.ACCOUNT1){
			dataset.setFillColor(ACCOUNT1_FILL_COLOR);
			dataset.setStrokeColor(ACCOUNT1_STROKE_COLOR);
			dataset.setPointColor(ACCOUNT1_POINT_COLOR);
			dataset.setPointStrokeColor(ACCOUNT1_POINT_STROKE_COLOR);
			dataset.setPointHighlightFill(ACCOUNT1_POINT_HIGHTLIGHT_FILL);
			dataset.setPointHighlightStroke(ACCOUNT1_POINT_HIGHTLIGHT_STROKE);
			
			dataset.setHighlightFill(ACCOUNT1_HIGHTLIGHT_FILL);
			dataset.setHighlightStroke(ACCOUNT1_HIGHTLIGHT_STROKE);
			
		}else if(Accounts.valueOf(account) == Accounts.ACCOUNT2){
			dataset.setFillColor(ACCOUNT2_FILL_COLOR);
			dataset.setStrokeColor(ACCOUNT2_STROKE_COLOR);
			dataset.setPointColor(ACCOUNT2_POINT_COLOR);
			dataset.setPointStrokeColor(ACCOUNT2_POINT_STROKE_COLOR);
			dataset.setPointHighlightFill(ACCOUNT2_POINT_HIGHTLIGHT_FILL);
			dataset.setPointHighlightStroke(ACCOUNT2_POINT_HIGHTLIGHT_STROKE);
			
			dataset.setHighlightFill(ACCOUNT2_HIGHTLIGHT_FILL);
			dataset.setHighlightStroke(ACCOUNT2_HIGHTLIGHT_STROKE);
			
		}else if(Accounts.valueOf(account) == Accounts.ACCOUNT3){
			dataset.setFillColor(ACCOUNT3_FILL_COLOR);
			dataset.setStrokeColor(ACCOUNT3_STROKE_COLOR);
			dataset.setPointColor(ACCOUNT3_POINT_COLOR);
			dataset.setPointStrokeColor(ACCOUNT3_POINT_STROKE_COLOR);
			dataset.setPointHighlightFill(ACCOUNT3_POINT_HIGHTLIGHT_FILL);
			dataset.setPointHighlightStroke(ACCOUNT3_POINT_HIGHTLIGHT_STROKE);
		
			dataset.setHighlightFill(ACCOUNT3_HIGHTLIGHT_FILL);
			dataset.setHighlightStroke(ACCOUNT3_HIGHTLIGHT_STROKE);
		}
			
			return dataset;
		}
	
}
