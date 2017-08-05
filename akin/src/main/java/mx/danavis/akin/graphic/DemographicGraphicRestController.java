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
public class DemographicGraphicRestController {
	
	private static final String MEN_POLITIC1_FILL_COLOR="rgba(155,31,24,0.5)";
	private static final String MEN_POLITIC1_STROKE_COLOR="rgba(156,31,24,0.1)";
	private static final String MEN_POLITIC1_POINT_COLOR="rgba(156,31,24,1)";
	private static final String MEN_POLITIC1_POINT_STROKE_COLOR="#fff";
	private static final String MEN_POLITIC1_POINT_HIGHTLIGHT_FILL="#fff";
	private static final String MEN_POLITIC1_POINT_HIGHTLIGHT_STROKE="rgba(156,31,24,1)";
	
	private static final String WOMEN_POLITIC1_FILL_COLOR="rgba(230,48,39,0.5)";
	private static final String WOMEN_POLITIC1_STROKE_COLOR="rgba(229,48,39,1)";
	private static final String WOMEN_POLITIC1_POINT_COLOR="rgba(229,48,39,1)";
	private static final String WOMEN_POLITIC1_POINT_STROKE_COLOR="#fff";
	private static final String WOMEN_POLITIC1_POINT_HIGHTLIGHT_FILL="#fff";
	private static final String WOMEN_POLITIC1_POINT_HIGHTLIGHT_STROKE="rgba(229,48,39,1)";
	
	private static final String MEN_POLITIC2_FILL_COLOR="rgba(29,70,159,0.5)";
	private static final String MEN_POLITIC2_STROKE_COLOR="rgba(29,70,159,0.1)";
	private static final String MEN_POLITIC2_POINT_COLOR="rgba(29,70,159,1)";
	private static final String MEN_POLITIC2_POINT_STROKE_COLOR="#fff";
	private static final String MEN_POLITIC2_POINT_HIGHTLIGHT_FILL="#fff";
	private static final String MEN_POLITIC2_POINT_HIGHTLIGHT_STROKE="rgba(29,70,159,1)";
	
	private static final String WOMEN_POLITIC2_FILL_COLOR="rgba(79,121,213,0.5)";
	private static final String WOMEN_POLITIC2_STROKE_COLOR="rgba(79,121,213,1)";
	private static final String WOMEN_POLITIC2_POINT_COLOR="rgba(79,121,213,1)";
	private static final String WOMEN_POLITIC2_POINT_STROKE_COLOR="#fff";
	private static final String WOMEN_POLITIC2_POINT_HIGHTLIGHT_FILL="#fff";
	private static final String WOMEN_POLITIC2_POINT_HIGHTLIGHT_STROKE="rgba(79,121,213,1)";
	
	private static final String MEN_POLITIC3_FILL_COLOR="rgba(220,177,7,0.5)";
	private static final String MEN_POLITIC3_STROKE_COLOR="rgba(220,177,7,0.1)";
	private static final String MEN_POLITIC3_POINT_COLOR="rgba(220,177,7,1)";
	private static final String MEN_POLITIC3_POINT_STROKE_COLOR="#fff";
	private static final String MEN_POLITIC3_POINT_HIGHTLIGHT_FILL="#fff";
	private static final String MEN_POLITIC3_POINT_HIGHTLIGHT_STROKE="rgba(220,177,7,1)";
	
	private static final String WOMEN_POLITIC3_FILL_COLOR="rgba(255,222,0,0.5)";
	private static final String WOMEN_POLITIC3_STROKE_COLOR="rgba(255,222,0,1)";
	private static final String WOMEN_POLITIC3_POINT_COLOR="rgba(255,222,0,1)";
	private static final String WOMEN_POLITIC3_POINT_STROKE_COLOR="#fff";
	private static final String WOMEN_POLITIC3_POINT_HIGHTLIGHT_FILL="#fff";
	private static final String WOMEN_POLITIC3_POINT_HIGHTLIGHT_STROKE="rgba(255,222,0,1)";
	
	private static final String MEN_POLITIC4_FILL_COLOR="rgba(49,193,119,0.5)";
	private static final String MEN_POLITIC4_STROKE_COLOR="rgba(49,193,119,0.1)";
	private static final String MEN_POLITIC4_POINT_COLOR="rgba(49,193,119,1)";
	private static final String MEN_POLITIC4_POINT_STROKE_COLOR="#fff";
	private static final String MEN_POLITIC4_POINT_HIGHTLIGHT_FILL="#fff";
	private static final String MEN_POLITIC4_POINT_HIGHTLIGHT_STROKE="rgba(49,193,119,1)";
	
	private static final String WOMEN_POLITIC4_FILL_COLOR="rgba(6,201,100,0.5)";
	private static final String WOMEN_POLITIC4_STROKE_COLOR="rgba(6,201,100,1)";
	private static final String WOMEN_POLITIC4_POINT_COLOR="rgba(6,201,100,1)";
	private static final String WOMEN_POLITIC4_POINT_STROKE_COLOR="#fff";
	private static final String WOMEN_POLITIC4_POINT_HIGHTLIGHT_FILL="#fff";
	private static final String WOMEN_POLITIC4_POINT_HIGHTLIGHT_STROKE="rgba(6,201,100,1)";
	
	@RequestMapping("/rest/drawDemographicGraphic")
	public List<Data> demoGraphic(@RequestParam(value="period",defaultValue="MONTHLY") String period)
	{
		List<Data> lstData = new ArrayList<Data>();
		
		//MONTHLY
		Data dataDemo1EducationMonthly = new Data();
		dataDemo1EducationMonthly.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo1EducationMonthly = fillingData(dataDemo1EducationMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{65, 59, 90},
						new int[]{34,67,89}),Accounts.ACCOUNT1);
		
		Data dataDemo2EducationMonthly = new Data();
		dataDemo2EducationMonthly.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo2EducationMonthly = fillingData(dataDemo2EducationMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{55, 49, 80},
						new int[]{44,37,59}),Accounts.ACCOUNT2);
		
		Data dataDemo3EducationMonthly = new Data();
		dataDemo3EducationMonthly.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo3EducationMonthly = fillingData(dataDemo3EducationMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{55, 49, 50},
						new int[]{45,60,40}),Accounts.ACCOUNT3);
		
		Data dataDemo4EducationMonthly = new Data();
		dataDemo4EducationMonthly.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo4EducationMonthly = fillingData(dataDemo4EducationMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{35,50,30}),Accounts.ACCOUNT4);
		
		Data dataDemo1OccupationMonthly = new Data();
		dataDemo1OccupationMonthly.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo1OccupationMonthly = fillingData(dataDemo1OccupationMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{12, 14, 25},
						new int[]{25,46,63}),Accounts.ACCOUNT1);
		
		Data dataDemo2OccupationMonthly = new Data();
		dataDemo2OccupationMonthly.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo2OccupationMonthly = fillingData(dataDemo2OccupationMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{26, 64, 35},
						new int[]{48,64,36}),Accounts.ACCOUNT2);
		
		Data dataDemo3OccupationMonthly = new Data();
		dataDemo3OccupationMonthly.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo3OccupationMonthly = fillingData(dataDemo3OccupationMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{46, 68, 40},
						new int[]{47,26,37}),Accounts.ACCOUNT3);
		
		Data dataDemo4OccupationMonthly = new Data();
		dataDemo4OccupationMonthly.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo4OccupationMonthly = fillingData(dataDemo4OccupationMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{36, 58, 30},
						new int[]{37,16,27}),Accounts.ACCOUNT4);
		
		Data dataDemo1CivilStatusMonthly = new Data();
		dataDemo1CivilStatusMonthly.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo1CivilStatusMonthly = fillingData(dataDemo1CivilStatusMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{36, 45, 23},
						new int[]{25,36,35}),Accounts.ACCOUNT1);
		
		Data dataDemo2CivilStatusMonthly = new Data();
		dataDemo2CivilStatusMonthly.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo2CivilStatusMonthly = fillingData(dataDemo2CivilStatusMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{64, 35, 36},
						new int[]{48,76,36}),Accounts.ACCOUNT2);
		
		Data dataDemo3CivilStatusMonthly = new Data();
		dataDemo3CivilStatusMonthly.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo3CivilStatusMonthly = fillingData(dataDemo3CivilStatusMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 22, 26},
						new int[]{37,27,49}),Accounts.ACCOUNT3);
		
		Data dataDemo4CivilStatusMonthly = new Data();
		dataDemo4CivilStatusMonthly.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo4CivilStatusMonthly = fillingData(dataDemo4CivilStatusMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{35, 12, 16},
						new int[]{27,17,39}),Accounts.ACCOUNT4);
		
		Data dataDemo1ReligionMonthly = new Data();
		dataDemo1ReligionMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1ReligionMonthly = fillingData(dataDemo1ReligionMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{5, 9, 30},
						new int[]{34,47,39}),Accounts.ACCOUNT1);
		
		Data dataDemo2ReligionMonthly = new Data();
		dataDemo2ReligionMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2ReligionMonthly = fillingData(dataDemo2ReligionMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{54,37,50}),Accounts.ACCOUNT2);
		
		Data dataDemo3ReligionMonthly = new Data();
		dataDemo3ReligionMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3ReligionMonthly = fillingData(dataDemo3ReligionMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{56, 48, 37},
						new int[]{53,38,53}),Accounts.ACCOUNT3);
		
		Data dataDemo4ReligionMonthly = new Data();
		dataDemo4ReligionMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo4ReligionMonthly = fillingData(dataDemo4ReligionMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{36, 38, 27},
						new int[]{43,38,53}),Accounts.ACCOUNT4);
		
		Data dataDemo1PoliticalMonthly = new Data();
		dataDemo1PoliticalMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1PoliticalMonthly = fillingData(dataDemo1PoliticalMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{74, 33, 11},
						new int[]{22,44,33}),Accounts.ACCOUNT1);
		
		Data dataDemo2PoliticalMonthly = new Data();
		dataDemo2PoliticalMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2PoliticalMonthly = fillingData(dataDemo2PoliticalMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{12, 45, 26},
						new int[]{11,22,9}),Accounts.ACCOUNT2);
		
		Data dataDemo3PoliticalMonthly = new Data();
		dataDemo3PoliticalMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3PoliticalMonthly = fillingData(dataDemo3PoliticalMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{24, 35, 35},
						new int[]{55,33,21}),Accounts.ACCOUNT3);
		
		Data dataDemo4PoliticalMonthly = new Data();
		dataDemo4PoliticalMonthly.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo4PoliticalMonthly = fillingData(dataDemo4PoliticalMonthly, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{14, 25, 25},
						new int[]{45,23,11}),Accounts.ACCOUNT4);
		//MONTHLY END
		
		//TRIMESTER 
		Data dataDemo1EducationTrimester = new Data();
		dataDemo1EducationTrimester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo1EducationTrimester = fillingData(dataDemo1EducationTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{65, 59, 90},
						new int[]{34,67,89}),Accounts.ACCOUNT1);
		
		Data dataDemo2EducationTrimester = new Data();
		dataDemo2EducationTrimester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo2EducationTrimester = fillingData(dataDemo2EducationTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{55, 49, 80},
						new int[]{44,37,59}),Accounts.ACCOUNT2);
		
		Data dataDemo3EducationTrimester = new Data();
		dataDemo3EducationTrimester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo3EducationTrimester = fillingData(dataDemo3EducationTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{55, 49, 50},
						new int[]{45,60,40}),Accounts.ACCOUNT3);
		
		Data dataDemo4EducationTrimester = new Data();
		dataDemo4EducationTrimester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo4EducationTrimester = fillingData(dataDemo4EducationTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{35,50,30}),Accounts.ACCOUNT4);
		
		Data dataDemo1OccupationTrimester = new Data();
		dataDemo1OccupationTrimester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo1OccupationTrimester = fillingData(dataDemo1OccupationTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{12, 14, 25},
						new int[]{25,46,63}),Accounts.ACCOUNT1);
		
		Data dataDemo2OccupationTrimester = new Data();
		dataDemo2OccupationTrimester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo2OccupationTrimester = fillingData(dataDemo2OccupationTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{26, 64, 35},
						new int[]{48,64,36}),Accounts.ACCOUNT2);
		
		Data dataDemo3OccupationTrimester = new Data();
		dataDemo3OccupationTrimester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo3OccupationTrimester = fillingData(dataDemo3OccupationTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{46, 68, 40},
						new int[]{47,26,37}),Accounts.ACCOUNT3);
		
		Data dataDemo4OccupationTrimester = new Data();
		dataDemo4OccupationTrimester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo4OccupationTrimester = fillingData(dataDemo4OccupationTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{36, 58, 30},
						new int[]{37,16,27}),Accounts.ACCOUNT4);
		
		Data dataDemo1CivilStatusTrimester = new Data();
		dataDemo1CivilStatusTrimester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo1CivilStatusTrimester = fillingData(dataDemo1CivilStatusTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{36, 45, 23},
						new int[]{25,36,35}),Accounts.ACCOUNT1);
		
		Data dataDemo2CivilStatusTrimester = new Data();
		dataDemo2CivilStatusTrimester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo2CivilStatusTrimester = fillingData(dataDemo2CivilStatusTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{64, 35, 36},
						new int[]{48,76,36}),Accounts.ACCOUNT2);
		
		Data dataDemo3CivilStatusTrimester = new Data();
		dataDemo3CivilStatusTrimester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo3CivilStatusTrimester = fillingData(dataDemo3CivilStatusTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 22, 26},
						new int[]{37,27,49}),Accounts.ACCOUNT3);
		
		Data dataDemo4CivilStatusTrimester = new Data();
		dataDemo4CivilStatusTrimester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo4CivilStatusTrimester = fillingData(dataDemo4CivilStatusTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{35, 12, 16},
						new int[]{27,17,39}),Accounts.ACCOUNT4);
		
		Data dataDemo1ReligionTrimester = new Data();
		dataDemo1ReligionTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1ReligionTrimester = fillingData(dataDemo1ReligionTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{5, 9, 30},
						new int[]{34,47,39}),Accounts.ACCOUNT1);
		
		Data dataDemo2ReligionTrimester = new Data();
		dataDemo2ReligionTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2ReligionTrimester = fillingData(dataDemo2ReligionTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{54,37,50}),Accounts.ACCOUNT2);
		
		Data dataDemo3ReligionTrimester = new Data();
		dataDemo3ReligionTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3ReligionTrimester = fillingData(dataDemo3ReligionTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{56, 48, 37},
						new int[]{53,38,53}),Accounts.ACCOUNT3);
		
		Data dataDemo4ReligionTrimester = new Data();
		dataDemo4ReligionTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo4ReligionTrimester = fillingData(dataDemo4ReligionTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{46, 38, 27},
						new int[]{43,28,43}),Accounts.ACCOUNT4);
		
		Data dataDemo1PoliticalTrimester = new Data();
		dataDemo1PoliticalTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1PoliticalTrimester = fillingData(dataDemo1PoliticalTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{74, 33, 11},
						new int[]{22,44,33}),Accounts.ACCOUNT1);
		
		Data dataDemo2PoliticalTrimester = new Data();
		dataDemo2PoliticalTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2PoliticalTrimester = fillingData(dataDemo2PoliticalTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{12, 45, 26},
						new int[]{11,22,9}),Accounts.ACCOUNT2);
		
		Data dataDemo3PoliticalTrimester = new Data();
		dataDemo3PoliticalTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3PoliticalTrimester = fillingData(dataDemo3PoliticalTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{24, 35, 35},
						new int[]{55,33,21}),Accounts.ACCOUNT3);
		
		Data dataDemo4PoliticalTrimester = new Data();
		dataDemo4PoliticalTrimester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo4PoliticalTrimester = fillingData(dataDemo4PoliticalTrimester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{14, 25, 25},
						new int[]{45,23,11}),Accounts.ACCOUNT4);
		//TRIMESTER END
		
		//SEMESTER 
		Data dataDemo1EducationSemester = new Data();
		dataDemo1EducationSemester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo1EducationSemester = fillingData(dataDemo1EducationSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{65, 59, 90},
						new int[]{34,67,89}),Accounts.ACCOUNT1);
		
		Data dataDemo2EducationSemester = new Data();
		dataDemo2EducationSemester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo2EducationSemester = fillingData(dataDemo2EducationSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{55, 49, 80},
						new int[]{44,37,59}),Accounts.ACCOUNT2);
		
		Data dataDemo3EducationSemester = new Data();
		dataDemo3EducationSemester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo3EducationSemester = fillingData(dataDemo3EducationSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{55, 49, 50},
						new int[]{45,60,40}),Accounts.ACCOUNT3);
		
		Data dataDemo4EducationSemester = new Data();
		dataDemo4EducationSemester.setLabels(Arrays.asList("Secundaria", "Preparatoria", "Universidad"));
		dataDemo4EducationSemester = fillingData(dataDemo4EducationSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{35,50,30}),Accounts.ACCOUNT4);
		
		Data dataDemo1OccupationSemester = new Data();
		dataDemo1OccupationSemester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo1OccupationSemester = fillingData(dataDemo1OccupationSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{12, 14, 25},
						new int[]{25,46,63}),Accounts.ACCOUNT1);
		
		Data dataDemo2OccupationSemester = new Data();
		dataDemo2OccupationSemester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo2OccupationSemester = fillingData(dataDemo2OccupationSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{26, 64, 35},
						new int[]{48,64,36}),Accounts.ACCOUNT2);
		
		Data dataDemo3OccupationSemester = new Data();
		dataDemo3OccupationSemester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo3OccupationSemester = fillingData(dataDemo3OccupationSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{46, 68, 40},
						new int[]{47,26,37}),Accounts.ACCOUNT3);
		
		Data dataDemo4OccupationSemester = new Data();
		dataDemo4OccupationSemester.setLabels(Arrays.asList("Profesionista", "Obrero", "Ama de Casa"));
		dataDemo4OccupationSemester = fillingData(dataDemo4OccupationSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{36, 58, 30},
						new int[]{37,16,27}),Accounts.ACCOUNT4);
		
		Data dataDemo1CivilStatusSemester = new Data();
		dataDemo1CivilStatusSemester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo1CivilStatusSemester = fillingData(dataDemo1CivilStatusSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{36, 45, 23},
						new int[]{25,36,35}),Accounts.ACCOUNT1);
		
		Data dataDemo2CivilStatusSemester = new Data();
		dataDemo2CivilStatusSemester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo2CivilStatusSemester = fillingData(dataDemo2CivilStatusSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{64, 35, 36},
						new int[]{48,76,36}),Accounts.ACCOUNT2);
		
		Data dataDemo3CivilStatusSemester = new Data();
		dataDemo3CivilStatusSemester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo3CivilStatusSemester = fillingData(dataDemo3CivilStatusSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 22, 26},
						new int[]{37,27,49}),Accounts.ACCOUNT3);
		
		Data dataDemo4CivilStatusSemester = new Data();
		dataDemo4CivilStatusSemester.setLabels(Arrays.asList("Soltero", "Casado", "Otro"));
		dataDemo4CivilStatusSemester = fillingData(dataDemo4CivilStatusSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{35, 12, 16},
						new int[]{27,17,39}),Accounts.ACCOUNT4);
		
		Data dataDemo1ReligionSemester = new Data();
		dataDemo1ReligionSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1ReligionSemester = fillingData(dataDemo1ReligionSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{5, 9, 30},
						new int[]{34,47,39}),Accounts.ACCOUNT1);
		
		Data dataDemo2ReligionSemester = new Data();
		dataDemo2ReligionSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2ReligionSemester = fillingData(dataDemo2ReligionSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{45, 39, 40},
						new int[]{54,37,50}),Accounts.ACCOUNT2);
		
		Data dataDemo3ReligionSemester = new Data();
		dataDemo3ReligionSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3ReligionSemester = fillingData(dataDemo3ReligionSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{56, 48, 37},
						new int[]{53,38,53}),Accounts.ACCOUNT3);
		
		Data dataDemo4ReligionSemester = new Data();
		dataDemo4ReligionSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo4ReligionSemester = fillingData(dataDemo4ReligionSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{46, 38, 27},
						new int[]{23,18,23}),Accounts.ACCOUNT4);
		
		Data dataDemo1PoliticalSemester = new Data();
		dataDemo1PoliticalSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo1PoliticalSemester = fillingData(dataDemo1PoliticalSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{74, 33, 11},
						new int[]{22,44,33}),Accounts.ACCOUNT1);
		
		Data dataDemo2PoliticalSemester = new Data();
		dataDemo2PoliticalSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo2PoliticalSemester = fillingData(dataDemo2PoliticalSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{12, 45, 26},
						new int[]{11,22,9}),Accounts.ACCOUNT2);
		
		Data dataDemo3PoliticalSemester = new Data();
		dataDemo3PoliticalSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo3PoliticalSemester = fillingData(dataDemo3PoliticalSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{24, 35, 35},
						new int[]{55,33,21}),Accounts.ACCOUNT3);
		
		Data dataDemo4PoliticalSemester = new Data();
		dataDemo4PoliticalSemester.setLabels(Arrays.asList("Cristiano", "Católico", "Otro"));
		dataDemo4PoliticalSemester = fillingData(dataDemo4PoliticalSemester, Arrays.asList("Hombres","Mujeres"), 
				Arrays.asList(new int[]{14, 25, 15},
						new int[]{45,23,11}),Accounts.ACCOUNT4);
		//SEMESTER END
		
		lstData.add(dataDemo1EducationMonthly);
		lstData.add(dataDemo2EducationMonthly);
		lstData.add(dataDemo3EducationMonthly);
		lstData.add(dataDemo4EducationMonthly);
		lstData.add(dataDemo1OccupationMonthly);
		lstData.add(dataDemo2OccupationMonthly);
		lstData.add(dataDemo3OccupationMonthly);
		lstData.add(dataDemo4OccupationMonthly);
		lstData.add(dataDemo1CivilStatusMonthly);
		lstData.add(dataDemo2CivilStatusMonthly);
		lstData.add(dataDemo3CivilStatusMonthly);
		lstData.add(dataDemo4CivilStatusMonthly);
		lstData.add(dataDemo1ReligionMonthly);
		lstData.add(dataDemo2ReligionMonthly);
		lstData.add(dataDemo3ReligionMonthly);
		lstData.add(dataDemo4ReligionMonthly);
		lstData.add(dataDemo1PoliticalMonthly);
		lstData.add(dataDemo2PoliticalMonthly);
		lstData.add(dataDemo3PoliticalMonthly);
		lstData.add(dataDemo4PoliticalMonthly);
		
		lstData.add(dataDemo1EducationTrimester);
		lstData.add(dataDemo2EducationTrimester);
		lstData.add(dataDemo3EducationTrimester);
		lstData.add(dataDemo4EducationTrimester);
		lstData.add(dataDemo1OccupationTrimester);
		lstData.add(dataDemo2OccupationTrimester);
		lstData.add(dataDemo3OccupationTrimester);
		lstData.add(dataDemo4OccupationTrimester);
		lstData.add(dataDemo1CivilStatusTrimester);
		lstData.add(dataDemo2CivilStatusTrimester);
		lstData.add(dataDemo3CivilStatusTrimester);
		lstData.add(dataDemo4CivilStatusTrimester);
		lstData.add(dataDemo1ReligionTrimester);
		lstData.add(dataDemo2ReligionTrimester);
		lstData.add(dataDemo3ReligionTrimester);
		lstData.add(dataDemo4ReligionTrimester);
		lstData.add(dataDemo1PoliticalTrimester);
		lstData.add(dataDemo2PoliticalTrimester);
		lstData.add(dataDemo3PoliticalTrimester);
		lstData.add(dataDemo4PoliticalTrimester);
		
		lstData.add(dataDemo1EducationSemester);
		lstData.add(dataDemo2EducationSemester);
		lstData.add(dataDemo3EducationSemester);
		lstData.add(dataDemo4EducationSemester);
		lstData.add(dataDemo1OccupationSemester);
		lstData.add(dataDemo2OccupationSemester);
		lstData.add(dataDemo3OccupationSemester);
		lstData.add(dataDemo4OccupationSemester);
		lstData.add(dataDemo1CivilStatusSemester);
		lstData.add(dataDemo2CivilStatusSemester);
		lstData.add(dataDemo3CivilStatusSemester);
		lstData.add(dataDemo4CivilStatusSemester);
		lstData.add(dataDemo1ReligionSemester);
		lstData.add(dataDemo2ReligionSemester);
		lstData.add(dataDemo3ReligionSemester);
		lstData.add(dataDemo4ReligionSemester);
		lstData.add(dataDemo1PoliticalSemester);
		lstData.add(dataDemo2PoliticalSemester);
		lstData.add(dataDemo3PoliticalSemester);
		lstData.add(dataDemo4PoliticalSemester);

		return lstData;
	}
	

	public Data fillingData(Data data,List<String> labels,List<int[]> datas, Accounts account)
	{
		List<Dataset> lstDataset = new ArrayList<Dataset>();
		for (int i = 0; i< labels.size(); i++) {
			Dataset dataset = new Dataset();
			dataset.setLabel(labels.get(i));
			dataset.setData(datas.get(i));
			dataset = setColorGraph(dataset, account,dataset.getLabel());
			lstDataset.add(dataset);
		}
		data.setDatasets(lstDataset);
		return data;
	}
	
	public Dataset setColorGraph(Dataset dataset,Accounts account,String gender){
		
		
		if( account.equals(Accounts.ACCOUNT1) )
		{
			
				if(gender.equalsIgnoreCase(Gender.MEN.getGender()))
				{
					
					dataset.setFillColor(MEN_POLITIC1_FILL_COLOR);
					dataset.setStrokeColor(MEN_POLITIC1_STROKE_COLOR);
					dataset.setPointColor(MEN_POLITIC1_POINT_COLOR);
					dataset.setPointStrokeColor(MEN_POLITIC1_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(MEN_POLITIC1_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(MEN_POLITIC1_POINT_HIGHTLIGHT_STROKE);
					
				}else if(gender.equalsIgnoreCase(Gender.WOMEN.getGender()))
				{

					dataset.setFillColor(WOMEN_POLITIC1_FILL_COLOR);
					dataset.setStrokeColor(WOMEN_POLITIC1_STROKE_COLOR);
					dataset.setPointColor(WOMEN_POLITIC1_POINT_COLOR);
					dataset.setPointStrokeColor(WOMEN_POLITIC1_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(WOMEN_POLITIC1_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(WOMEN_POLITIC1_POINT_HIGHTLIGHT_STROKE);
					
				}
			}
		
		if( account.equals(Accounts.ACCOUNT2) )
		{

			if(gender.equalsIgnoreCase(Gender.MEN.getGender()))
				{

					dataset.setFillColor(MEN_POLITIC2_FILL_COLOR);
					dataset.setStrokeColor(MEN_POLITIC2_STROKE_COLOR);
					dataset.setPointColor(MEN_POLITIC2_POINT_COLOR);
					dataset.setPointStrokeColor(MEN_POLITIC2_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(MEN_POLITIC2_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(MEN_POLITIC2_POINT_HIGHTLIGHT_STROKE);
					
				}else if(gender.equalsIgnoreCase(Gender.WOMEN.getGender()))
				{
					
					dataset.setFillColor(WOMEN_POLITIC2_FILL_COLOR);
					dataset.setStrokeColor(WOMEN_POLITIC2_STROKE_COLOR);
					dataset.setPointColor(WOMEN_POLITIC2_POINT_COLOR);
					dataset.setPointStrokeColor(WOMEN_POLITIC2_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(WOMEN_POLITIC2_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(WOMEN_POLITIC2_POINT_HIGHTLIGHT_STROKE);
					
				}
			
		}
		if(account.equals(Accounts.ACCOUNT3) )
		{

			if(gender.equalsIgnoreCase(Gender.MEN.getGender()))
				{

					dataset.setFillColor(MEN_POLITIC3_FILL_COLOR);
					dataset.setStrokeColor(MEN_POLITIC3_STROKE_COLOR);
					dataset.setPointColor(MEN_POLITIC3_POINT_COLOR);
					dataset.setPointStrokeColor(MEN_POLITIC3_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(MEN_POLITIC3_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(MEN_POLITIC3_POINT_HIGHTLIGHT_STROKE);
					
				}else if(gender.equalsIgnoreCase(Gender.WOMEN.getGender()))
				{

					dataset.setFillColor(WOMEN_POLITIC3_FILL_COLOR);
					dataset.setStrokeColor(WOMEN_POLITIC3_STROKE_COLOR);
					dataset.setPointColor(WOMEN_POLITIC3_POINT_COLOR);
					dataset.setPointStrokeColor(WOMEN_POLITIC3_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(WOMEN_POLITIC3_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(WOMEN_POLITIC3_POINT_HIGHTLIGHT_STROKE);
					
				}
			
		}
		if( account.equals(Accounts.ACCOUNT4) )
		{
			
			if(gender.equalsIgnoreCase(Gender.MEN.getGender()))
				{

					dataset.setFillColor(MEN_POLITIC4_FILL_COLOR);
					dataset.setStrokeColor(MEN_POLITIC4_STROKE_COLOR);
					dataset.setPointColor(MEN_POLITIC4_POINT_COLOR);
					dataset.setPointStrokeColor(MEN_POLITIC4_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(MEN_POLITIC4_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(MEN_POLITIC4_POINT_HIGHTLIGHT_STROKE);
					
				}else if(gender.equalsIgnoreCase(Gender.WOMEN.getGender()))
				{

					dataset.setFillColor(WOMEN_POLITIC4_FILL_COLOR);
					dataset.setStrokeColor(WOMEN_POLITIC4_STROKE_COLOR);
					dataset.setPointColor(WOMEN_POLITIC4_POINT_COLOR);
					dataset.setPointStrokeColor(WOMEN_POLITIC4_POINT_STROKE_COLOR);
					dataset.setPointHighlightFill(WOMEN_POLITIC4_POINT_HIGHTLIGHT_FILL);
					dataset.setPointHighlightStroke(WOMEN_POLITIC4_POINT_HIGHTLIGHT_STROKE);
					
				}
			}
			
			return dataset;
		}
	
}
