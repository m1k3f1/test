package mx.danavis.akin.graphic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.danavis.akin.enums.Accounts;
import mx.danavis.akin.enums.Gender;

@RestController
public class GeneralGraphicRestController {

	private final String ACCOUNT1_FILL_COLOR="rgba(181, 38, 30,0.5)";
	private final String ACCOUNT1_STROKE_COLOR="rgba(181, 38, 30,0.1)";
	private final String ACCOUNT1_POINT_COLOR="rgba(181, 38, 30,1)";
	private final String ACCOUNT1_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT1_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT1_POINT_HIGHTLIGHT_STROKE="rgba(181, 38, 30,1)";
	private final String ACCOUNT1_HIGHTLIGHT_FILL="rgba(181, 38, 30,0.75)";
	private final String ACCOUNT1_HIGHTLIGHT_STROKE="rgba(181, 38, 30,1)";
	
	private final String ACCOUNT2_FILL_COLOR="rgba(59, 89, 152,0.5)";
	private final String ACCOUNT2_STROKE_COLOR="rgba(59, 89, 152,1)";
	private final String ACCOUNT2_POINT_COLOR="rgba(59, 89, 152,1)";
	private final String ACCOUNT2_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT2_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT2_POINT_HIGHTLIGHT_STROKE="rgba(59, 89, 152,1)";
	private final String ACCOUNT2_HIGHTLIGHT_FILL="rgba(59, 89, 152,0.75)";
	private final String ACCOUNT2_HIGHTLIGHT_STROKE="rgba(59, 89, 152,1)";
	
	private final String ACCOUNT3_FILL_COLOR="rgba(255, 203, 1,0.7)";
	private final String ACCOUNT3_STROKE_COLOR="rgba(255, 203, 1,1)";
	private final String ACCOUNT3_POINT_COLOR="rgba(255, 203, 1,1)";
	private final String ACCOUNT3_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT3_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT3_POINT_HIGHTLIGHT_STROKE="rgba(255, 203, 1,1)";
	private final String ACCOUNT3_HIGHTLIGHT_FILL="rgba(255, 203, 1,0.75)";
	private final String ACCOUNT3_HIGHTLIGHT_STROKE="rgba(255, 203, 1,1)";
	
	private final String ACCOUNT4_FILL_COLOR="rgba(0, 166, 80 ,0.7)";
	private final String ACCOUNT4_STROKE_COLOR="rg0, 166, 80 ,71,1)";
	private final String ACCOUNT4_POINT_COLOR="rgba(0, 166, 80 ,1)";
	private final String ACCOUNT4_POINT_STROKE_COLOR="#fff";
	private final String ACCOUNT4_POINT_HIGHTLIGHT_FILL="#fff";
	private final String ACCOUNT4_POINT_HIGHTLIGHT_STROKE="rgba(0, 166, 80 ,1)";
	private final String ACCOUNT4_HIGHTLIGHT_FILL="rgba(0, 166, 80 ,0.75)";
	private final String ACCOUNT4_HIGHTLIGHT_STROKE="rgba(0, 166, 80 ,1)";
	
	private final String MEN_POLITIC1_FILL_COLOR="rgba(156,31,24,0.5)";
	private final String MEN_POLITIC1_STROKE_COLOR="rgba(156,31,24,0.1)";
	private final String MEN_POLITIC1_POINT_COLOR="rgba(156,31,24,1)";
	private final String MEN_POLITIC1_POINT_STROKE_COLOR="#fff";
	private final String MEN_POLITIC1_POINT_HIGHTLIGHT_FILL="#fff";
	private final String MEN_POLITIC1_POINT_HIGHTLIGHT_STROKE="rgba(156,31,24,1)";
	private final String MEN_POLITIC1_HIGHTLIGHT_FILL="rgba(156,31,24,0.75)";
	private final String MEN_POLITIC1_HIGHTLIGHT_STROKE="rgba(156,31,24,1)";
	
	private final String WOMEN_POLITIC1_FILL_COLOR="rgba(250,123,116,0.5)";
	private final String WOMEN_POLITIC1_STROKE_COLOR="rgba(250,123,116,1)";
	private final String WOMEN_POLITIC1_POINT_COLOR="rgba(250,123,116,1)";
	private final String WOMEN_POLITIC1_POINT_STROKE_COLOR="#fff";
	private final String WOMEN_POLITIC1_POINT_HIGHTLIGHT_FILL="#fff";
	private final String WOMEN_POLITIC1_POINT_HIGHTLIGHT_STROKE="rgba(250,123,116,1)";
	private final String WOMEN_POLITIC1_HIGHTLIGHT_FILL="rgba(250,123,1169,0.75)";
	private final String WOMEN_POLITIC1_HIGHTLIGHT_STROKE="rgba(250,123,116,1)";
	
	private final String MEN_POLITIC2_FILL_COLOR="rgba(29,70,159,0.5)";
	private final String MEN_POLITIC2_STROKE_COLOR="rgba(29,70,159,0.1)";
	private final String MEN_POLITIC2_POINT_COLOR="rgba(29,70,159,1)";
	private final String MEN_POLITIC2_POINT_STROKE_COLOR="#fff";
	private final String MEN_POLITIC2_POINT_HIGHTLIGHT_FILL="#fff";
	private final String MEN_POLITIC2_POINT_HIGHTLIGHT_STROKE="rgba(29,70,159,1)";
	private final String MEN_POLITIC2_HIGHTLIGHT_FILL="rgba(29,70,159,0.75)";
	private final String MEN_POLITIC2_HIGHTLIGHT_STROKE="rgba(29,70,159,1)";
	
	private final String WOMEN_POLITIC2_FILL_COLOR="rgba(92,141,247,0.5)";
	private final String WOMEN_POLITIC2_STROKE_COLOR="rgba(92,141,247,1)";
	private final String WOMEN_POLITIC2_POINT_COLOR="rgba(92,141,247,1)";
	private final String WOMEN_POLITIC2_POINT_STROKE_COLOR="#fff";
	private final String WOMEN_POLITIC2_POINT_HIGHTLIGHT_FILL="#fff";
	private final String WOMEN_POLITIC2_POINT_HIGHTLIGHT_STROKE="rgba(92,141,247,1)";
	private final String WOMEN_POLITIC2_HIGHTLIGHT_FILL="rgba(92,141,247,0.75)";
	private final String WOMEN_POLITIC2_HIGHTLIGHT_STROKE="rgba(92,141,247,1)";
	
	private final String MEN_POLITIC3_FILL_COLOR="rgba(220,177,7,0.5)";
	private final String MEN_POLITIC3_STROKE_COLOR="rgba(220,177,7,0.1)";
	private final String MEN_POLITIC3_POINT_COLOR="rgba(220,177,7,1)";
	private final String MEN_POLITIC3_POINT_STROKE_COLOR="#fff";
	private final String MEN_POLITIC3_POINT_HIGHTLIGHT_FILL="#fff";
	private final String MEN_POLITIC3_POINT_HIGHTLIGHT_STROKE="rgba(220,177,7,1)";
	private final String MEN_POLITIC3_HIGHTLIGHT_FILL="rgba(220,177,7,0.75)";
	private final String MEN_POLITIC3_HIGHTLIGHT_STROKE="rgba(220,177,7,1)";
	
	private final String WOMEN_POLITIC3_FILL_COLOR="rgba(250,222,110,0.5)";
	private final String WOMEN_POLITIC3_STROKE_COLOR="rgba(250,222,110,1)";
	private final String WOMEN_POLITIC3_POINT_COLOR="rgba(250,222,110,1)";
	private final String WOMEN_POLITIC3_POINT_STROKE_COLOR="#fff";
	private final String WOMEN_POLITIC3_POINT_HIGHTLIGHT_FILL="#fff";
	private final String WOMEN_POLITIC3_POINT_HIGHTLIGHT_STROKE="rgba(250,222,110,1)";
	private final String WOMEN_POLITIC3_HIGHTLIGHT_FILL="rgba(250,222,110,0.75)";
	private final String WOMEN_POLITIC3_HIGHTLIGHT_STROKE="rgba(250,222,110,1)";
	
	private final String MEN_POLITIC4_FILL_COLOR="rgba(49,193,119,0.5)";
	private final String MEN_POLITIC4_STROKE_COLOR="rgba(49,193,119,0.1)";
	private final String MEN_POLITIC4_POINT_COLOR="rgba(49,193,119,1)";
	private final String MEN_POLITIC4_POINT_STROKE_COLOR="#fff";
	private final String MEN_POLITIC4_POINT_HIGHTLIGHT_FILL="#fff";
	private final String MEN_POLITIC4_POINT_HIGHTLIGHT_STROKE="rgba(49,193,119,1)";
	private final String MEN_POLITIC4_HIGHTLIGHT_FILL="rgba(49,193,119,0.75)";
	private final String MEN_POLITIC4_HIGHTLIGHT_STROKE="rgba(49,193,119,1)";
	
	private final String WOMEN_POLITIC4_FILL_COLOR="rgba(134,248,189,0.5)";
	private final String WOMEN_POLITIC4_STROKE_COLOR="rgba(134,248,189,1)";
	private final String WOMEN_POLITIC4_POINT_COLOR="rgba(134,248,189,1)";
	private final String WOMEN_POLITIC4_POINT_STROKE_COLOR="#fff";
	private final String WOMEN_POLITIC4_POINT_HIGHTLIGHT_FILL="#fff";
	private final String WOMEN_POLITIC4_POINT_HIGHTLIGHT_STROKE="rgba(134,248,189,1)";
	private final String WOMEN_POLITIC4_HIGHTLIGHT_FILL="rgba(134,248,189,0.75)";
	private final String WOMEN_POLITIC4_HIGHTLIGHT_STROKE="rgba(134,248,189,1)";
	
	@RequestMapping("/rest/drawFollowersGraphic")
	public List<Data> graphics(@RequestParam(value="period",defaultValue="MONTHLY") String period)
	{
		List<Data> lstData = new ArrayList<Data>();
		Data dataMontlyLineChart = new Data();
		Data dataTrimesterLineChart = new Data();
		Data dataSemesterLineChart = new Data();
		Data dataMontly1BarChart = new Data();
		Data dataMontly2BarChart = new Data();
		Data dataMontly3BarChart = new Data();
		Data dataMontly4BarChart = new Data();
		Data dataTrimester1BarChart = new Data();
		Data dataTrimester2BarChart = new Data();
		Data dataTrimester3BarChart = new Data();
		Data dataTrimester4BarChart = new Data();
		Data dataSemester1BarChart = new Data();
		Data dataSemester2BarChart = new Data();
		Data dataSemester3BarChart = new Data();
		Data dataSemester4BarChart = new Data();
		
		dataMontlyLineChart.setLabels(Arrays.asList("Semana 1", "Semana 2", "Semana 3", "Semana 4"));
		dataMontlyLineChart = fillingData(dataMontlyLineChart, Arrays.asList("Andrés Manuel López Obrador","Rafael Moreno Valle","Miguel Ángel Mancera","Eruviel Ávila Villegas"), 
				Arrays.asList(new int[]{219	,288	,286	,533},
							new int[]{1493,	1996	,4068,	2920},
							new int[]{183	,451, 502	,606},
							new int[]{222	,486, 564	,397}));
	
		dataTrimesterLineChart.setLabels(Arrays.asList("Mes 1", "Mes 2", "Mes 3"));
		dataTrimesterLineChart = fillingData(dataTrimesterLineChart, Arrays.asList("Andrés Manuel López Obrador","Rafael Moreno Valle","Miguel Ángel Mancera","Eruviel Ávila Villegas"), 
				Arrays.asList(new int[]{2619	,3122	,4251},
						new int[]{18857	,6027	,5619},
						new int[]{2874,	2383	,2560},
						new int[]{3559,	4141	,4053}));
		
		dataSemesterLineChart.setLabels(Arrays.asList("Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6"));
		dataSemesterLineChart = fillingData(dataSemesterLineChart, Arrays.asList("Andrés Manuel López Obrador","Rafael Moreno Valle","Miguel Ángel Mancera","Eruviel Ávila Villegas"),
				Arrays.asList(new int[]{2619,	3122,	4251	,3058	,4815	,2877},
						new int[]{18857	,6027	,5619	,6476	,9849	,8018},
						new int[]{2874,	2383,	2560	,2135	,2415	,3904},
						new int[]{3559,	4141,	4053	,2457	,2054	,2759}));
		
		dataMontly1BarChart.setLabels(Arrays.asList("Andrés Manuel López Obrador"));
		dataMontly1BarChart = fillingDataDemographic(dataMontly1BarChart, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{65},new int[]{28}),Accounts.ACCOUNT1);
		
		dataMontly2BarChart.setLabels(Arrays.asList("Rafael Moreno Valle"));
		dataMontly2BarChart = fillingDataDemographic(dataMontly2BarChart, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{59},new int[]{48}),Accounts.ACCOUNT2);
		
		dataMontly3BarChart.setLabels(Arrays.asList("Miguel Ángel Mancera"));
		dataMontly3BarChart = fillingDataDemographic(dataMontly3BarChart, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{55},new int[]{18}),Accounts.ACCOUNT3);
		
		dataMontly4BarChart.setLabels(Arrays.asList("Eruviel Ávila Villegas"));
		dataMontly4BarChart = fillingDataDemographic(dataMontly4BarChart, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{49},new int[]{38}),Accounts.ACCOUNT4);
		
		dataTrimester1BarChart.setLabels(Arrays.asList("Andrés Manuel López Obrador"));
		dataTrimester1BarChart = fillingDataDemographic(dataTrimester1BarChart, Arrays.asList("Hombres","Mujeres"),
				Arrays.asList(new int[]{10},new int[]{44}),Accounts.ACCOUNT1);
		
		dataTrimester2BarChart.setLabels(Arrays.asList("Rafael Moreno Valle"));
		dataTrimester2BarChart = fillingDataDemographic(dataTrimester2BarChart, Arrays.asList("Hombres","Mujeres"),
				Arrays.asList(new int[]{34},new int[]{22}),Accounts.ACCOUNT2);
		
		dataTrimester3BarChart.setLabels(Arrays.asList("Miguel Ángel Mancera"));
		dataTrimester3BarChart = fillingDataDemographic(dataTrimester3BarChart, Arrays.asList("Hombres","Mujeres"),
				Arrays.asList(new int[]{20},new int[]{54}),Accounts.ACCOUNT3);
		
		dataTrimester4BarChart.setLabels(Arrays.asList("Eruviel Ávila Villegas"));
		dataTrimester4BarChart = fillingDataDemographic(dataTrimester4BarChart, Arrays.asList("Hombres","Mujeres"),
				Arrays.asList(new int[]{44},new int[]{32}),Accounts.ACCOUNT4);
		
		dataSemester1BarChart.setLabels(Arrays.asList("Andrés Manuel López Obrador"));
		dataSemester1BarChart = fillingDataDemographic(dataSemester1BarChart, Arrays.asList("Hombres","Mujeres"),
				Arrays.asList(new int[]{12},new int[]{15}),Accounts.ACCOUNT1);
		
		dataSemester2BarChart.setLabels(Arrays.asList("Rafael Moreno Valle"));
		dataSemester2BarChart = fillingDataDemographic(dataSemester2BarChart, Arrays.asList("Hombres","Mujeres"),
				Arrays.asList(new int[]{ 34},new int[]{ 21}),Accounts.ACCOUNT2);
		
		dataSemester3BarChart.setLabels(Arrays.asList("Miguel Ángel Mancera"));
		dataSemester3BarChart = fillingDataDemographic(dataSemester3BarChart, Arrays.asList("Hombres","Mujeres"),
				Arrays.asList(new int[]{2},new int[]{5}),Accounts.ACCOUNT3);
		
		dataSemester4BarChart.setLabels(Arrays.asList("Eruviel Ávila Villegas"));
		dataSemester4BarChart = fillingDataDemographic(dataSemester4BarChart, Arrays.asList("Hombres","Mujeres"),
				Arrays.asList(new int[]{ 24},new int[]{ 11}),Accounts.ACCOUNT4);
		
		
		lstData.add(dataMontlyLineChart);
		lstData.add(dataMontly1BarChart);
		lstData.add(dataMontly2BarChart);
		lstData.add(dataMontly3BarChart);
		lstData.add(dataMontly4BarChart);
		
		lstData.add(dataTrimesterLineChart);
		lstData.add(dataTrimester1BarChart);
		lstData.add(dataTrimester2BarChart);
		lstData.add(dataTrimester3BarChart);
		lstData.add(dataTrimester4BarChart);
		
		lstData.add(dataSemesterLineChart);
		lstData.add(dataSemester1BarChart);
		lstData.add(dataSemester2BarChart);
		lstData.add(dataSemester3BarChart);
		lstData.add(dataSemester4BarChart);
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
	
	public Data fillingDataDemographic(Data data,List<String> labels,List<int[]> datas,Accounts account)
	{
		List<Dataset> lstDataset = new ArrayList<Dataset>();
		
				for(int i=0; i<labels.size();i++)
				{
					Dataset dataset = new Dataset();
					dataset.setLabel(labels.get(i));
					dataset.setData(datas.get(i));
					if(labels.get(i).equalsIgnoreCase(Gender.MEN.getGender())){
						dataset = setColorGraphDemographic(dataset,account, Gender.MEN);
					}
					if(labels.get(i).equalsIgnoreCase(Gender.WOMEN.getGender())){
						dataset = setColorGraphDemographic(dataset,account, Gender.WOMEN);
					}
					lstDataset.add(dataset);
				}		
			
		
		
		data.setDatasets(lstDataset);
		return data;
	}
	
	public Dataset setColorGraphDemographic(Dataset dataset,Accounts account, Gender gender){
		
		if( account.equals(Accounts.ACCOUNT1) )
		{
				if(gender.equals(Gender.MEN))
				{
					
					dataset.setFillColor(MEN_POLITIC1_FILL_COLOR);
					dataset.setStrokeColor(MEN_POLITIC1_STROKE_COLOR);
					dataset.setPointColor(MEN_POLITIC1_POINT_COLOR);
					dataset.setPointStrokeColor(MEN_POLITIC1_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(MEN_POLITIC1_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(MEN_POLITIC1_POINT_HIGHTLIGHT_STROKE);
					
					dataset.setHighlightFill(MEN_POLITIC1_HIGHTLIGHT_FILL);
					dataset.setHighlightStroke(MEN_POLITIC1_HIGHTLIGHT_STROKE);
				}else if(gender.equals(Gender.WOMEN))
				{
					
					dataset.setFillColor(WOMEN_POLITIC1_FILL_COLOR);
					dataset.setStrokeColor(WOMEN_POLITIC1_STROKE_COLOR);
					dataset.setPointColor(WOMEN_POLITIC1_POINT_COLOR);
					dataset.setPointStrokeColor(WOMEN_POLITIC1_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(WOMEN_POLITIC1_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(WOMEN_POLITIC1_POINT_HIGHTLIGHT_STROKE);
					
					dataset.setHighlightFill(WOMEN_POLITIC1_HIGHTLIGHT_FILL);
					dataset.setHighlightStroke(WOMEN_POLITIC1_HIGHTLIGHT_STROKE);
				}
			}
		
		if( account.equals(Accounts.ACCOUNT2) )
		{

				if(gender.equals(Gender.MEN))
				{
					
					dataset.setFillColor(MEN_POLITIC2_FILL_COLOR);
					dataset.setStrokeColor(MEN_POLITIC2_STROKE_COLOR);
					dataset.setPointColor(MEN_POLITIC2_POINT_COLOR);
					dataset.setPointStrokeColor(MEN_POLITIC2_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(MEN_POLITIC2_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(MEN_POLITIC2_POINT_HIGHTLIGHT_STROKE);
					
					dataset.setHighlightFill(MEN_POLITIC2_HIGHTLIGHT_FILL);
					dataset.setHighlightStroke(MEN_POLITIC2_HIGHTLIGHT_STROKE);
				}else if(gender.equals(Gender.WOMEN))
				{
					
					dataset.setFillColor(WOMEN_POLITIC2_FILL_COLOR);
					dataset.setStrokeColor(WOMEN_POLITIC2_STROKE_COLOR);
					dataset.setPointColor(WOMEN_POLITIC2_POINT_COLOR);
					dataset.setPointStrokeColor(WOMEN_POLITIC2_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(WOMEN_POLITIC2_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(WOMEN_POLITIC2_POINT_HIGHTLIGHT_STROKE);
					
					dataset.setHighlightFill(WOMEN_POLITIC2_HIGHTLIGHT_FILL);
					dataset.setHighlightStroke(WOMEN_POLITIC2_HIGHTLIGHT_STROKE);
				}
			
		}
		if( account.equals(Accounts.ACCOUNT3) )
		{

				if(gender.equals(Gender.MEN))
				{
					
					dataset.setFillColor(MEN_POLITIC3_FILL_COLOR);
					dataset.setStrokeColor(MEN_POLITIC3_STROKE_COLOR);
					dataset.setPointColor(MEN_POLITIC3_POINT_COLOR);
					dataset.setPointStrokeColor(MEN_POLITIC3_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(MEN_POLITIC3_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(MEN_POLITIC3_POINT_HIGHTLIGHT_STROKE);
					
					dataset.setHighlightFill(MEN_POLITIC3_HIGHTLIGHT_FILL);
					dataset.setHighlightStroke(MEN_POLITIC3_HIGHTLIGHT_STROKE);
				}else if(gender.equals(Gender.WOMEN))
				{
				
					dataset.setFillColor(WOMEN_POLITIC3_FILL_COLOR);
					dataset.setStrokeColor(WOMEN_POLITIC3_STROKE_COLOR);
					dataset.setPointColor(WOMEN_POLITIC3_POINT_COLOR);
					dataset.setPointStrokeColor(WOMEN_POLITIC3_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(WOMEN_POLITIC3_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(WOMEN_POLITIC3_POINT_HIGHTLIGHT_STROKE);
					
					dataset.setHighlightFill(WOMEN_POLITIC3_HIGHTLIGHT_FILL);
					dataset.setHighlightStroke(WOMEN_POLITIC3_HIGHTLIGHT_STROKE);
				}
			
		}
		if( account.equals(Accounts.ACCOUNT4) )
		{
			
				if(gender.equals(Gender.MEN))
				{
		
					dataset.setFillColor(MEN_POLITIC4_FILL_COLOR);
					dataset.setStrokeColor(MEN_POLITIC4_STROKE_COLOR);
					dataset.setPointColor(MEN_POLITIC4_POINT_COLOR);
					dataset.setPointStrokeColor(MEN_POLITIC4_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(MEN_POLITIC4_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(MEN_POLITIC4_POINT_HIGHTLIGHT_STROKE);
					
					dataset.setHighlightFill(MEN_POLITIC4_HIGHTLIGHT_FILL);
					dataset.setHighlightStroke(MEN_POLITIC4_HIGHTLIGHT_STROKE);
				}else if(gender.equals(Gender.WOMEN))
				{
			
					dataset.setFillColor(WOMEN_POLITIC4_FILL_COLOR);
					dataset.setStrokeColor(WOMEN_POLITIC4_STROKE_COLOR);
					dataset.setPointColor(WOMEN_POLITIC4_POINT_COLOR);
					dataset.setPointStrokeColor(WOMEN_POLITIC4_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(WOMEN_POLITIC4_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(WOMEN_POLITIC4_POINT_HIGHTLIGHT_STROKE);
					
					dataset.setHighlightFill(WOMEN_POLITIC4_HIGHTLIGHT_FILL);
					dataset.setHighlightStroke(WOMEN_POLITIC4_HIGHTLIGHT_STROKE);
				}
			}
	
			return dataset;
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
