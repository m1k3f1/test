package mx.danavis.akin.graphic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.danavis.akin.enums.Accounts;

@RestController
public class PostGraphicRestController {

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
	
	@RequestMapping("/rest/drawPostGraphic")
	public List<Data> graphics(@RequestParam(value="period",defaultValue="MONTHLY") String period)
	{
		List<Data> lstData = new ArrayList<Data>();
		Data dataAccount1MontlyReations = new Data();
		Data dataAccount2MontlyReations = new Data();
		Data dataAccount3MontlyReations = new Data();
		Data dataAccount1TrimesterReations = new Data();
		Data dataAccount2TrimesterReations = new Data();
		Data dataAccount3TrimesterReations = new Data();
		Data dataAccount1SemesterReations = new Data();
		Data dataAccount2SemesterReations = new Data();
		Data dataAccount3SemesterReations = new Data();
		
		dataAccount1MontlyReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount1MontlyReations = fillingData(dataAccount1MontlyReations, Arrays.asList("Ricardo Anaya Cort\u00e9s"), 
				Arrays.asList(new int[]{2041,		1798,	26,	241,	9,108}), Accounts.ACCOUNT1);
		
		dataAccount2MontlyReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount2MontlyReations = fillingData(dataAccount2MontlyReations, Arrays.asList("Margarita Zavala"), 
				Arrays.asList(new int[]{5226,	1496,	26	,266,	901,155}), Accounts.ACCOUNT2);
		
		dataAccount3MontlyReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount3MontlyReations = fillingData(dataAccount3MontlyReations, Arrays.asList("Rafael Moreno Valle"), 
				Arrays.asList(new int[]{17560,	15370,	360	,5481,	2000	,9004}), Accounts.ACCOUNT3);
		
		dataAccount1TrimesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount1TrimesterReations = fillingData(dataAccount1TrimesterReations, Arrays.asList("Ricardo Anaya Cort\u00e9s"), 
				Arrays.asList(new int[]{19058,		13595,	542,	3683,	0,2614}), Accounts.ACCOUNT1);
		
		dataAccount2TrimesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount2TrimesterReations = fillingData(dataAccount2TrimesterReations, Arrays.asList("Margarita Zavala"), 
				Arrays.asList(new int[]{12571,	3635	,242	,2292,	0,	401}), Accounts.ACCOUNT2);
		
		dataAccount3TrimesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount3TrimesterReations = fillingData(dataAccount3TrimesterReations, Arrays.asList("Rafael Moreno Valle"), 
				Arrays.asList(new int[]{42341,	5640,	1533	,6751,	0,	7437}),Accounts.ACCOUNT3);
		
		
		dataAccount1SemesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount1SemesterReations = fillingData(dataAccount1SemesterReations, Arrays.asList("Ricardo Anaya Cort\u00e9s"), 
				Arrays.asList(new int[]{30877	,	38934,	882,	12363,	0,3712}), Accounts.ACCOUNT1);
		
		dataAccount2SemesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount2SemesterReations = fillingData(dataAccount2SemesterReations, Arrays.asList("Margarita Zavala"), 
				Arrays.asList(new int[]{22512,	14356	,433,	6208,	1	,854}), Accounts.ACCOUNT2);
		
		dataAccount3SemesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount3SemesterReations = fillingData(dataAccount3SemesterReations, Arrays.asList("Rafael Moreno Valle"), 
				Arrays.asList(new int[]{107200	,23049,	2921	,21335	,4,	34220}), Accounts.ACCOUNT3);
		
		lstData.add(dataAccount1MontlyReations);
		lstData.add(dataAccount2MontlyReations);
		lstData.add(dataAccount3MontlyReations);
		lstData.add(dataAccount1TrimesterReations);
		lstData.add(dataAccount2TrimesterReations);
		lstData.add(dataAccount3TrimesterReations);
		lstData.add(dataAccount1SemesterReations);
		lstData.add(dataAccount2SemesterReations);
		lstData.add(dataAccount3SemesterReations);
		
		return lstData;
	}
	
	
	@RequestMapping("/rest/drawPerWeekGraphic")
	public List<Data> graphicsPerWeek(@RequestParam(value="period",defaultValue="MONTHLY") String period)
	{
		List<Data> lstData = new ArrayList<Data>();
		Data dataMontlyReations = new Data();
		Data dataTrimesterReations = new Data();
		Data dataSemesterReations = new Data();
		
		dataMontlyReations.setLabels(Arrays.asList("Semana 1" , "Semana 2","Semana 3", "Semana 4"));
		dataMontlyReations = fillingData(dataMontlyReations, Arrays.asList("Ricardo Anaya Cort\u00e9s","Margarita Zavala","Rafael Moreno Valle"), 
				Arrays.asList(new int[]{8,	3,11,16},
						new int[]{9,12,5,5},
						new int[]{13,16,19,12}),null);
		
		dataTrimesterReations.setLabels(Arrays.asList("Mes 1" , "Mes 2","Mes 3"));
		dataTrimesterReations = fillingData(dataTrimesterReations, Arrays.asList("Ricardo Anaya Cort\u00e9s","Margarita Zavala","Rafael Moreno Valle"), 
				Arrays.asList(new int[]{23,	23,19},
						new int[]{18,	28	,19},
						new int[]{114	,106	,57}),null);
		
		
		dataSemesterReations.setLabels(Arrays.asList("Mes 1" , "Mes 2","Mes 3", "Mes 4","Mes 5","Mes 6"));
		dataSemesterReations = fillingData(dataSemesterReations, Arrays.asList("Ricardo Anaya Cort\u00e9s","Margarita Zavala","Rafael Moreno Valle"), 
				Arrays.asList(new int[]{23	,23	,19,	13,	9	,22},
						new int[]{18,	28	,19	,20	,17	,25},
						new int[]{114	,106,	57	,123	,47	,52}),null);
		
		
		lstData.add(dataMontlyReations);
		lstData.add(dataTrimesterReations);
		lstData.add(dataSemesterReations);
		
		return lstData;
	}
	
	public Data fillingData(Data data,List<String> labels,List<int[]> datas, Accounts account)
	{
		List<Dataset> lstDataset = new ArrayList<Dataset>();
		if(labels.size()>1)
		{
			for (int i = 0; i< labels.size(); i++) {
				Dataset dataset = new Dataset();
				dataset.setLabel(labels.get(i));
				dataset.setData(datas.get(i));
				dataset = setColorGraph(dataset, "ACCOUNT"+(i+1));
				
				lstDataset.add(dataset);
			}
		}else{
				Dataset dataset = new Dataset();
				dataset.setLabel(labels.get(0));
				dataset.setData(datas.get(0));
				dataset = setColorGraph(dataset, account.name());
				
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
