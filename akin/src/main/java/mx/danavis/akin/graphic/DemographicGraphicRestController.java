package mx.danavis.akin.graphic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.danavis.akin.enums.Accounts;

@RestController
public class DemographicGraphicRestController {
	
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
	
	@RequestMapping("/rest/drawDemographicGraphic")
	public List<Data> demoGraphic(@RequestParam(value="period",defaultValue="MONTHLY") String period)
	{
		List<Data> lstData = new ArrayList<Data>();
		
		//MONTHLY
		Data dataDemo1EducationMonthly = new Data();
		dataDemo1EducationMonthly.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo1EducationMonthly = fillingData(dataDemo1EducationMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{65, 59, 90},
						new int[]{34,67,89},
						new int[]{56,67,78}));
		
		Data dataDemo2EducationMonthly = new Data();
		dataDemo2EducationMonthly.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo2EducationMonthly = fillingData(dataDemo2EducationMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{55, 49, 80},
						new int[]{44,37,59},
						new int[]{36,37,58}));
		
		Data dataDemo3EducationMonthly = new Data();
		dataDemo3EducationMonthly.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo3EducationMonthly = fillingData(dataDemo3EducationMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{55, 49, 50},
						new int[]{45,60,40},
						new int[]{32,70,60}));
		
		Data dataDemo1OccupationMonthly = new Data();
		dataDemo1OccupationMonthly.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo1OccupationMonthly = fillingData(dataDemo1OccupationMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{12, 14, 25},
						new int[]{25,46,63},
						new int[]{42,34,75}));
		
		Data dataDemo2OccupationMonthly = new Data();
		dataDemo2OccupationMonthly.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo2OccupationMonthly = fillingData(dataDemo2OccupationMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{26, 64, 35},
						new int[]{48,64,36},
						new int[]{36,75,35}));
		
		Data dataDemo3OccupationMonthly = new Data();
		dataDemo3OccupationMonthly.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo3OccupationMonthly = fillingData(dataDemo3OccupationMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{46, 68, 40},
						new int[]{47,26,37},
						new int[]{27,37,47}));
		
		Data dataDemo1CivilStatusMonthly = new Data();
		dataDemo1CivilStatusMonthly.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo1CivilStatusMonthly = fillingData(dataDemo1CivilStatusMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{36, 45, 23},
						new int[]{25,36,35},
						new int[]{36,34,57}));
		
		Data dataDemo2CivilStatusMonthly = new Data();
		dataDemo2CivilStatusMonthly.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo2CivilStatusMonthly = fillingData(dataDemo2CivilStatusMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{64, 35, 36},
						new int[]{48,76,36},
						new int[]{37,34,46}));
		
		Data dataDemo3CivilStatusMonthly = new Data();
		dataDemo3CivilStatusMonthly.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo3CivilStatusMonthly = fillingData(dataDemo3CivilStatusMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{45, 22, 26},
						new int[]{37,27,49},
						new int[]{16,27,18}));
		
		Data dataDemo1ReligionMonthly = new Data();
		dataDemo1ReligionMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1ReligionMonthly = fillingData(dataDemo1ReligionMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{5, 9, 30},
						new int[]{34,47,39},
						new int[]{66,37,38}));
		
		Data dataDemo2ReligionMonthly = new Data();
		dataDemo2ReligionMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2ReligionMonthly = fillingData(dataDemo2ReligionMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{54,37,50},
						new int[]{16,47,18}));
		
		Data dataDemo3ReligionMonthly = new Data();
		dataDemo3ReligionMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3ReligionMonthly = fillingData(dataDemo3ReligionMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{56, 48, 37},
						new int[]{53,38,53},
						new int[]{42,26,53}));
		
		Data dataDemo1PoliticalMonthly = new Data();
		dataDemo1PoliticalMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1PoliticalMonthly = fillingData(dataDemo1PoliticalMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{74, 33, 11},
						new int[]{22,44,33},
						new int[]{24,34,11}));
		
		Data dataDemo2PoliticalMonthly = new Data();
		dataDemo2PoliticalMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2PoliticalMonthly = fillingData(dataDemo2PoliticalMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{12, 45, 26},
						new int[]{11,22,9},
						new int[]{5,3,8}));
		
		Data dataDemo3PoliticalMonthly = new Data();
		dataDemo3PoliticalMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3PoliticalMonthly = fillingData(dataDemo3PoliticalMonthly, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{24, 35, 35},
						new int[]{55,33,21},
						new int[]{45,73,15}));
		//MONTHLY END
		
		//TRIMESTER 
		Data dataDemo1EducationTrimester = new Data();
		dataDemo1EducationTrimester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo1EducationTrimester = fillingData(dataDemo1EducationTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{65, 59, 90},
						new int[]{34,67,89},
						new int[]{56,67,78}));
		
		Data dataDemo2EducationTrimester = new Data();
		dataDemo2EducationTrimester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo2EducationTrimester = fillingData(dataDemo2EducationTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{55, 49, 80},
						new int[]{44,37,59},
						new int[]{36,37,58}));
		
		Data dataDemo3EducationTrimester = new Data();
		dataDemo3EducationTrimester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo3EducationTrimester = fillingData(dataDemo3EducationTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{55, 49, 50},
						new int[]{45,60,40},
						new int[]{32,70,60}));
		
		Data dataDemo1OccupationTrimester = new Data();
		dataDemo1OccupationTrimester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo1OccupationTrimester = fillingData(dataDemo1OccupationTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{12, 14, 25},
						new int[]{25,46,63},
						new int[]{42,34,75}));
		
		Data dataDemo2OccupationTrimester = new Data();
		dataDemo2OccupationTrimester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo2OccupationTrimester = fillingData(dataDemo2OccupationTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{26, 64, 35},
						new int[]{48,64,36},
						new int[]{36,75,35}));
		
		Data dataDemo3OccupationTrimester = new Data();
		dataDemo3OccupationTrimester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo3OccupationTrimester = fillingData(dataDemo3OccupationTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{46, 68, 40},
						new int[]{47,26,37},
						new int[]{27,37,47}));
		
		Data dataDemo1CivilStatusTrimester = new Data();
		dataDemo1CivilStatusTrimester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo1CivilStatusTrimester = fillingData(dataDemo1CivilStatusTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{36, 45, 23},
						new int[]{25,36,35},
						new int[]{36,34,57}));
		
		Data dataDemo2CivilStatusTrimester = new Data();
		dataDemo2CivilStatusTrimester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo2CivilStatusTrimester = fillingData(dataDemo2CivilStatusTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{64, 35, 36},
						new int[]{48,76,36},
						new int[]{37,34,46}));
		
		Data dataDemo3CivilStatusTrimester = new Data();
		dataDemo3CivilStatusTrimester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo3CivilStatusTrimester = fillingData(dataDemo3CivilStatusTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{45, 22, 26},
						new int[]{37,27,49},
						new int[]{16,27,18}));
		
		Data dataDemo1ReligionTrimester = new Data();
		dataDemo1ReligionTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1ReligionTrimester = fillingData(dataDemo1ReligionTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{5, 9, 30},
						new int[]{34,47,39},
						new int[]{66,37,38}));
		
		Data dataDemo2ReligionTrimester = new Data();
		dataDemo2ReligionTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2ReligionTrimester = fillingData(dataDemo2ReligionTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{54,37,50},
						new int[]{16,47,18}));
		
		Data dataDemo3ReligionTrimester = new Data();
		dataDemo3ReligionTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3ReligionTrimester = fillingData(dataDemo3ReligionTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{56, 48, 37},
						new int[]{53,38,53},
						new int[]{42,26,53}));
		
		Data dataDemo1PoliticalTrimester = new Data();
		dataDemo1PoliticalTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1PoliticalTrimester = fillingData(dataDemo1PoliticalTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{74, 33, 11},
						new int[]{22,44,33},
						new int[]{24,34,11}));
		
		Data dataDemo2PoliticalTrimester = new Data();
		dataDemo2PoliticalTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2PoliticalTrimester = fillingData(dataDemo2PoliticalTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{12, 45, 26},
						new int[]{11,22,9},
						new int[]{5,3,8}));
		
		Data dataDemo3PoliticalTrimester = new Data();
		dataDemo3PoliticalTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3PoliticalTrimester = fillingData(dataDemo3PoliticalTrimester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{24, 35, 35},
						new int[]{55,33,21},
						new int[]{45,73,15}));
		//TRIMESTER END
		
		//SEMESTER 
		Data dataDemo1EducationSemester = new Data();
		dataDemo1EducationSemester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo1EducationSemester = fillingData(dataDemo1EducationSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{65, 59, 90},
						new int[]{34,67,89},
						new int[]{56,67,78}));
		
		Data dataDemo2EducationSemester = new Data();
		dataDemo2EducationSemester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo2EducationSemester = fillingData(dataDemo2EducationSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{55, 49, 80},
						new int[]{44,37,59},
						new int[]{36,37,58}));
		
		Data dataDemo3EducationSemester = new Data();
		dataDemo3EducationSemester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo3EducationSemester = fillingData(dataDemo3EducationSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{55, 49, 50},
						new int[]{45,60,40},
						new int[]{32,70,60}));
		
		Data dataDemo1OccupationSemester = new Data();
		dataDemo1OccupationSemester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo1OccupationSemester = fillingData(dataDemo1OccupationSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{12, 14, 25},
						new int[]{25,46,63},
						new int[]{42,34,75}));
		
		Data dataDemo2OccupationSemester = new Data();
		dataDemo2OccupationSemester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo2OccupationSemester = fillingData(dataDemo2OccupationSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{26, 64, 35},
						new int[]{48,64,36},
						new int[]{36,75,35}));
		
		Data dataDemo3OccupationSemester = new Data();
		dataDemo3OccupationSemester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo3OccupationSemester = fillingData(dataDemo3OccupationSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{46, 68, 40},
						new int[]{47,26,37},
						new int[]{27,37,47}));
		
		Data dataDemo1CivilStatusSemester = new Data();
		dataDemo1CivilStatusSemester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo1CivilStatusSemester = fillingData(dataDemo1CivilStatusSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{36, 45, 23},
						new int[]{25,36,35},
						new int[]{36,34,57}));
		
		Data dataDemo2CivilStatusSemester = new Data();
		dataDemo2CivilStatusSemester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo2CivilStatusSemester = fillingData(dataDemo2CivilStatusSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{64, 35, 36},
						new int[]{48,76,36},
						new int[]{37,34,46}));
		
		Data dataDemo3CivilStatusSemester = new Data();
		dataDemo3CivilStatusSemester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo3CivilStatusSemester = fillingData(dataDemo3CivilStatusSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{45, 22, 26},
						new int[]{37,27,49},
						new int[]{16,27,18}));
		
		Data dataDemo1ReligionSemester = new Data();
		dataDemo1ReligionSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1ReligionSemester = fillingData(dataDemo1ReligionSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{5, 9, 30},
						new int[]{34,47,39},
						new int[]{66,37,38}));
		
		Data dataDemo2ReligionSemester = new Data();
		dataDemo2ReligionSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2ReligionSemester = fillingData(dataDemo2ReligionSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{54,37,50},
						new int[]{16,47,18}));
		
		Data dataDemo3ReligionSemester = new Data();
		dataDemo3ReligionSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3ReligionSemester = fillingData(dataDemo3ReligionSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{56, 48, 37},
						new int[]{53,38,53},
						new int[]{42,26,53}));
		
		Data dataDemo1PoliticalSemester = new Data();
		dataDemo1PoliticalSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1PoliticalSemester = fillingData(dataDemo1PoliticalSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{74, 33, 11},
						new int[]{22,44,33},
						new int[]{24,34,11}));
		
		Data dataDemo2PoliticalSemester = new Data();
		dataDemo2PoliticalSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2PoliticalSemester = fillingData(dataDemo2PoliticalSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{12, 45, 26},
						new int[]{11,22,9},
						new int[]{5,3,8}));
		
		Data dataDemo3PoliticalSemester = new Data();
		dataDemo3PoliticalSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3PoliticalSemester = fillingData(dataDemo3PoliticalSemester, Arrays.asList("Hombre","Mujer","Otro"), 
				Arrays.asList(new int[]{24, 35, 35},
						new int[]{55,33,21},
						new int[]{45,73,15}));
		//SEMESTER END
		
		lstData.add(dataDemo1EducationMonthly);
		lstData.add(dataDemo2EducationMonthly);
		lstData.add(dataDemo3EducationMonthly);
		lstData.add(dataDemo1OccupationMonthly);
		lstData.add(dataDemo2OccupationMonthly);
		lstData.add(dataDemo3OccupationMonthly);
		lstData.add(dataDemo1CivilStatusMonthly);
		lstData.add(dataDemo2CivilStatusMonthly);
		lstData.add(dataDemo3CivilStatusMonthly);
		lstData.add(dataDemo1ReligionMonthly);
		lstData.add(dataDemo2ReligionMonthly);
		lstData.add(dataDemo3ReligionMonthly);
		lstData.add(dataDemo1PoliticalMonthly);
		lstData.add(dataDemo2PoliticalMonthly);
		lstData.add(dataDemo3PoliticalMonthly);
		
		lstData.add(dataDemo1EducationTrimester);
		lstData.add(dataDemo2EducationTrimester);
		lstData.add(dataDemo3EducationTrimester);
		lstData.add(dataDemo1OccupationTrimester);
		lstData.add(dataDemo2OccupationTrimester);
		lstData.add(dataDemo3OccupationTrimester);
		lstData.add(dataDemo1CivilStatusTrimester);
		lstData.add(dataDemo2CivilStatusTrimester);
		lstData.add(dataDemo3CivilStatusTrimester);
		lstData.add(dataDemo1ReligionTrimester);
		lstData.add(dataDemo2ReligionTrimester);
		lstData.add(dataDemo3ReligionTrimester);
		lstData.add(dataDemo1PoliticalTrimester);
		lstData.add(dataDemo2PoliticalTrimester);
		lstData.add(dataDemo3PoliticalTrimester);
		
		lstData.add(dataDemo1EducationSemester);
		lstData.add(dataDemo2EducationSemester);
		lstData.add(dataDemo3EducationSemester);
		lstData.add(dataDemo1OccupationSemester);
		lstData.add(dataDemo2OccupationSemester);
		lstData.add(dataDemo3OccupationSemester);
		lstData.add(dataDemo1CivilStatusSemester);
		lstData.add(dataDemo2CivilStatusSemester);
		lstData.add(dataDemo3CivilStatusSemester);
		lstData.add(dataDemo1ReligionSemester);
		lstData.add(dataDemo2ReligionSemester);
		lstData.add(dataDemo3ReligionSemester);
		lstData.add(dataDemo1PoliticalSemester);
		lstData.add(dataDemo2PoliticalSemester);
		lstData.add(dataDemo3PoliticalSemester);

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
