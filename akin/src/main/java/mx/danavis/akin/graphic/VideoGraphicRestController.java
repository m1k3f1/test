package mx.danavis.akin.graphic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.danavis.akin.enums.Accounts;

@RestController
public class VideoGraphicRestController {

	private final String ACCOUNT1_FILL_COLOR="rgba(181, 38, 30,0.2)";
	private final String ACCOUNT1_STROKE_COLOR="rgba(181, 38, 30,0.1)";
	private final String ACCOUNT1_POINT_COLOR="rgba(181, 38, 30,1)";
	private final String ACCOUNT1_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT1_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT1_POINT_HIGHTLIGHT_STROKE="rgba(181, 38, 30,1)";
	private final String ACCOUNT1_HIGHTLIGHT_FILL="rgba(181, 38, 30,0.75)";
	private final String ACCOUNT1_HIGHTLIGHT_STROKE="rgba(181, 38, 30,1)";
	
	private final String ACCOUNT2_FILL_COLOR="rgba(59, 89, 152,0.2)";
	private final String ACCOUNT2_STROKE_COLOR="rgba(59, 89, 152,1)";
	private final String ACCOUNT2_POINT_COLOR="rgba(59, 89, 152,1)";
	private final String ACCOUNT2_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT2_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT2_POINT_HIGHTLIGHT_STROKE="rgba(59, 89, 152,1)";
	private final String ACCOUNT2_HIGHTLIGHT_FILL="rgba(59, 89, 152,0.75)";
	private final String ACCOUNT2_HIGHTLIGHT_STROKE="rgba(59, 89, 152,1)";
	
	private final String ACCOUNT3_FILL_COLOR="rgba(255, 203, 1,0.2)";
	private final String ACCOUNT3_STROKE_COLOR="rgba(255, 203, 1,1)";
	private final String ACCOUNT3_POINT_COLOR="rgba(255, 203, 1,1)";
	private final String ACCOUNT3_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT3_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT3_POINT_HIGHTLIGHT_STROKE="rgba(255, 203, 1,1)";
	private final String ACCOUNT3_HIGHTLIGHT_FILL="rgba(255, 203, 1,0.75)";
	private final String ACCOUNT3_HIGHTLIGHT_STROKE="rgba(255, 203, 1,1)";
	
	
	private final String ACCOUNT4_FILL_COLOR="rgba(0, 166, 80 ,0.2)";
	private final String ACCOUNT4_STROKE_COLOR="rg0, 166, 80 ,71,1)";
	private final String ACCOUNT4_POINT_COLOR="rgba(0, 166, 80 ,1)";
	private final String ACCOUNT4_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT4_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT4_POINT_HIGHTLIGHT_STROKE="rgba(0, 166, 80 ,1)";
	private final String ACCOUNT4_HIGHTLIGHT_FILL="rgba(0, 166, 80 ,0.75)";
	private final String ACCOUNT4_HIGHTLIGHT_STROKE="rgba(0, 166, 80 ,1)";
	
	private final String NAME_CUENTA1="Andrés Manuel López Obrador";
	private final String NAME_CUENTA2="Rafael Moreno Valle";
	private final String NAME_CUENTA3="Miguel Ángel Mancera";
	private final String NAME_CUENTA4="Eruviel Ávila Villegas";
	
	@RequestMapping("/rest/drawVideoReactionsGraphics")
	public List<Data> reactionsGraphics(@RequestParam(value="period",defaultValue="MONTHLY") String period)
	{
		List<Data> lstData = new ArrayList<Data>();
		
		Data dataAccount1MontlyReations = new Data();
		Data dataAccount2MontlyReations = new Data();
		Data dataAccount3MontlyReations = new Data();
		Data dataAccount4MontlyReations = new Data();
		
		Data dataAccount1TrimesterReations = new Data();
		Data dataAccount2TrimesterReations = new Data();
		Data dataAccount3TrimesterReations = new Data();
		Data dataAccount4TrimesterReations = new Data();
		
		Data dataAccount1SemesterReations = new Data();
		Data dataAccount2SemesterReations = new Data();
		Data dataAccount3SemesterReations = new Data();
		Data dataAccount4SemesterReations = new Data();
		
		dataAccount1MontlyReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount1MontlyReations = fillingData(dataAccount1MontlyReations, Arrays.asList(NAME_CUENTA1), 
				Arrays.asList(new int[]{3473,	429,	115	,871,	0	,306}), Accounts.ACCOUNT1);
		
		dataAccount2MontlyReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount2MontlyReations = fillingData(dataAccount2MontlyReations, Arrays.asList(NAME_CUENTA2), 
				Arrays.asList(new int[]{37379,	5361,	477,	4763,	2,	14956}), Accounts.ACCOUNT2);
		
		dataAccount3MontlyReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount3MontlyReations = fillingData(dataAccount3MontlyReations, Arrays.asList(NAME_CUENTA3), 
				Arrays.asList(new int[]{2028,	243	,43,	2044,	0,	307}), Accounts.ACCOUNT3);
		
		dataAccount4MontlyReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount4MontlyReations = fillingData(dataAccount4MontlyReations, Arrays.asList(NAME_CUENTA4), 
				Arrays.asList(new int[]{2017,	797	,333	,11973	,0	,355}), Accounts.ACCOUNT4);
		
		
		
		dataAccount1TrimesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount1TrimesterReations = fillingData(dataAccount1TrimesterReations, Arrays.asList(NAME_CUENTA1), 
				Arrays.asList(new int[]{23945,	4040,	274	,11313	,1,	3957}), Accounts.ACCOUNT1);
		
		dataAccount2TrimesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount2TrimesterReations = fillingData(dataAccount2TrimesterReations, Arrays.asList(NAME_CUENTA2), 
				Arrays.asList(new int[]{64908,	17458,	1376,	14206,	4,	26917}), Accounts.ACCOUNT2);
		
		dataAccount3TrimesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount3TrimesterReations = fillingData(dataAccount3TrimesterReations, Arrays.asList(NAME_CUENTA3),
				Arrays.asList(new int[]{6792,	1736,	169,	4947,	6,	1012}),Accounts.ACCOUNT3);
		
		dataAccount4TrimesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount4TrimesterReations = fillingData(dataAccount4TrimesterReations, Arrays.asList(NAME_CUENTA4), 
				Arrays.asList(new int[]{12829,	7349,	2849,	7157,	0,	2514}),Accounts.ACCOUNT4);
		
		
		
		dataAccount1SemesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount1SemesterReations = fillingData(dataAccount1SemesterReations, Arrays.asList(NAME_CUENTA1), 
				Arrays.asList(new int[]{37153,	179299,	516132,	44356	,7973,	5999}), Accounts.ACCOUNT1);
		
		dataAccount2SemesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount2SemesterReations = fillingData(dataAccount2SemesterReations, Arrays.asList(NAME_CUENTA2), 
				Arrays.asList(new int[]{108615,	276660,	3124178	,112695,	51830,	68184}), Accounts.ACCOUNT2);
		
		dataAccount3SemesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount3SemesterReations = fillingData(dataAccount3SemesterReations, Arrays.asList(NAME_CUENTA3), 
				Arrays.asList(new int[]{23028,	26609	,125042	,12146	,1903	,2414}), Accounts.ACCOUNT3);
		
		dataAccount4SemesterReations.setLabels(Arrays.asList("Me encanta" ,  "Me divierte", "Me entristece", "Me enoja", "Otra","Me asombra"));
		dataAccount4SemesterReations = fillingData(dataAccount4SemesterReations, Arrays.asList(NAME_CUENTA4), 
				Arrays.asList(new int[]{108615,	276660	,3124178,	112695	,51830	,68184}), Accounts.ACCOUNT4);
		
		
		lstData.add(dataAccount1MontlyReations);
		lstData.add(dataAccount2MontlyReations);
		lstData.add(dataAccount3MontlyReations);
		lstData.add(dataAccount4MontlyReations);
		lstData.add(dataAccount1TrimesterReations);
		lstData.add(dataAccount2TrimesterReations);
		lstData.add(dataAccount3TrimesterReations);
		lstData.add(dataAccount4TrimesterReations);
		lstData.add(dataAccount1SemesterReations);
		lstData.add(dataAccount2SemesterReations);
		lstData.add(dataAccount3SemesterReations);
		lstData.add(dataAccount4SemesterReations);
		
		return lstData;
	}
	
	
	@RequestMapping("/rest/drawVideoPerWeekGraphic")
	public List<Data> graphicsPerWeek(@RequestParam(value="period",defaultValue="MONTHLY") String period)
	{
		List<Data> lstData = new ArrayList<Data>();
		Data dataMontlyReations = new Data();
		Data dataTrimesterReations = new Data();
		Data dataSemesterReations = new Data();
		
		dataMontlyReations.setLabels(Arrays.asList("Semana 1" , "Semana 2","Semana 3", "Semana 4"));
		dataMontlyReations = fillingData(dataMontlyReations, Arrays.asList(NAME_CUENTA1,NAME_CUENTA2,NAME_CUENTA3,NAME_CUENTA4), 
				Arrays.asList(new int[]{0,	0,	1,	1},
						new int[]{6,	10,	23,	24},
						new int[]{10,	14,	7,	6},
						new int[]{1,	6,	8,	5}),null);
		
		dataTrimesterReations.setLabels(Arrays.asList("Mes 1" , "Mes 2","Mes 3"));
		dataTrimesterReations = fillingData(dataTrimesterReations, Arrays.asList(NAME_CUENTA1,NAME_CUENTA2,NAME_CUENTA3,NAME_CUENTA4), 
				Arrays.asList(new int[]{3,	9,	12},
						new int[]{119,	47,	54},
						new int[]{62,	38,	59},
						new int[]{34,	47,	40}),null);
		
		
		dataSemesterReations.setLabels(Arrays.asList("Mes 1" , "Mes 2","Mes 3", "Mes 4","Mes 5","Mes 6"));
		dataSemesterReations = fillingData(dataSemesterReations, Arrays.asList(NAME_CUENTA1,NAME_CUENTA2,NAME_CUENTA3,NAME_CUENTA4), 
				Arrays.asList(new int[]{3,	9,	12,	6,	4,	8},
						new int[]{119,	47,	54,	54,	80,	68},
						new int[]{62,	38,	59,	57,	54,	60},
						new int[]{34,	47,	40,	16,	16,	41}),null);
		
		
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
		}else if(Accounts.valueOf(account) == Accounts.ACCOUNT4){
			dataset.setFillColor(ACCOUNT4_FILL_COLOR);
			dataset.setStrokeColor(ACCOUNT4_STROKE_COLOR);
			dataset.setPointColor(ACCOUNT4_POINT_COLOR);
			dataset.setPointStrokeColor(ACCOUNT4_POINT_STROKE_COLOR);
			dataset.setPointHighlightFill(ACCOUNT4_POINT_HIGHTLIGHT_FILL);
			dataset.setPointHighlightStroke(ACCOUNT4_POINT_HIGHTLIGHT_STROKE);
		
			dataset.setHighlightFill(ACCOUNT4_HIGHTLIGHT_FILL);
			dataset.setHighlightStroke(ACCOUNT4_HIGHTLIGHT_STROKE);
		}
			
			return dataset;
		}
	
}
