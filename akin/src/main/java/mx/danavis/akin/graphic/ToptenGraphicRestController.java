package mx.danavis.akin.graphic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToptenGraphicRestController {
	
	private final String SEGUIDOR1_FILL_COLOR="rgba(144,140,143,0.8)";
	private final String SEGUIDOR1_STROKE_COLOR="rgba(144,140,143,0.8)";
	private final String SEGUIDOR1_HIGHTLIGHTFILL_COLOR="rgba(144,144,143,0.75)";
	private final String SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR="rgba(144,144,143,1)";
	
	private final String SEGUIDOR2_FILL_COLOR="rgba(26,179,148,0.5)";
	private final String SEGUIDOR2_STROKE_COLOR="rgba(144,140,143,0.8)";
	private final String SEGUIDOR2_HIGHTLIGHTFILL_COLOR="rgba(26,179,148,0.75)";
	private final String SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR="rgba(26,179,148,1)";
	
	private final String SEGUIDOR3_FILL_COLOR="rgba(234,171,237,0.7)";
	private final String SEGUIDOR3_STROKE_COLOR="rgba(216,111,221,0.7)";
	private final String SEGUIDOR3_HIGHTLIGHTFILL_COLOR="rgba(191,59,198,0.75)";
	private final String SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR="rgba(191,59,198,1)";
	
	private final String SEGUIDOR4_FILL_COLOR= "rgba(123,70,209,0.5)";
	private final String SEGUIDOR4_STROKE_COLOR= "rgba(123,70,209,0.8)";
	private final String SEGUIDOR4_HIGHTLIGHTFILL_COLOR= "rgba(123,70,209,0.75)";
	private final String SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR="rgba(123,70,209,1)";
	
	private final String SEGUIDOR5_FILL_COLOR="rgba(87,82,234,0.5)";
	private final String SEGUIDOR5_STROKE_COLOR="rgba(87,82,234,0.8)";
	private final String SEGUIDOR5_HIGHTLIGHTFILL_COLOR="rgba(87,82,234,0.75)";
	private final String SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR="rgba(87,82,234,1)";
	
	private final String SEGUIDOR6_FILL_COLOR="rgba(74,71,175,0.7)";
	private final String SEGUIDOR6_STROKE_COLOR="rgba(74,71,175,0.7)";
	private final String SEGUIDOR6_HIGHTLIGHTFILL_COLOR="rgba(74,71,175,0.75)";
	private final String SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR="rgba(74,71,175,1)";
	
	private final String SEGUIDOR7_FILL_COLOR="rgba(90,203,211,0.5)";
	private final String SEGUIDOR7_STROKE_COLOR="rgba(90,203,211,0.8)";
	private final String SEGUIDOR7_HIGHTLIGHTFILL_COLOR="rgba(90,203,211,0.75)";
	private final String SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR="rgba(90,203,211,1)";
	
	private final String SEGUIDOR8_FILL_COLOR="rgba(90,211,189,0.5)";
	private final String SEGUIDOR8_STROKE_COLOR="rgba(90,211,189,0.8)";
	private final String SEGUIDOR8_HIGHTLIGHTFILL_COLOR="rgba(90,211,189,0.75)";
	private final String SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR="rgba(90,211,189,1)";

	private final String SEGUIDOR9_FILL_COLOR="rgba(74,196,145,0.7)";
	private final String SEGUIDOR9_STROKE_COLOR="rgba(74,196,145,0.7)";
	private final String SEGUIDOR9_HIGHTLIGHTFILL_COLOR="rgba(74,196,145,0.75)";
	private final String SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR="rgba(74,196,145,1)";
	
	private final String SEGUIDOR10_FILL_COLOR="rgba(196,183,74,0.7)";
	private final String SEGUIDOR10_STROKE_COLOR="rgba(196,183,74,0.7)";
	private final String SEGUIDOR10_HIGHTLIGHTFILL_COLOR="rgba(196,183,74,0.75)";
	private final String SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR="rgba(196,183,74,1)";
	@RequestMapping("/rest/drawToptenGraphic")
	public List<Data> graphics(@RequestParam(value="period",defaultValue="MONTHLY") String period){
		
		List<Data> lstData = new ArrayList<Data>();
		Data dataAccount1monthly = new Data();
		Data dataAccount2monthly = new Data();
		Data dataAccount3monthly = new Data();
		Data dataAccount1trimester = new Data();
		Data dataAccount2trimester = new Data();
		Data dataAccount3trimester = new Data();
		Data dataAccount1semester = new Data();
		Data dataAccount2semester = new Data();
		Data dataAccount3semester = new Data();
		//$$$$$$$$$$$$$ MONTHLY $$$$$$$$$$$$$$$$$$$//
		//########## ACCOUNT 1 END #########################//
		Dataset datasetAcc1Seg1 = new Dataset("Pbp PB",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
				SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{9});
		
		Dataset datasetAcc1Seg2 = new Dataset("Maria Cruz Uscanga",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
				SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{9});
		
		Dataset datasetAcc1Seg3 = new Dataset("Janie Jones",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
				SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{7});
		
		Dataset datasetAcc1Seg4 = new Dataset("Hector Cruz",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
				SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{6});
		
		Dataset datasetAcc1Seg5 = new Dataset("Misael Ochoa Matuz",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
				SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{6});
		
		Dataset datasetAcc1Seg6 = new Dataset("Isabel Lugo Arias",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
				SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{6});
		
		Dataset datasetAcc1Seg7 = new Dataset("Hector Gutierrez Sorzano",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
				SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{6});
		
		Dataset datasetAcc1Seg8 = new Dataset("Oskarin Perez Toscano",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
				SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{6});
		
		Dataset datasetAcc1Seg9 = new Dataset("Josemaria Delafuente",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
				SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{6});

		Dataset datasetAcc1Seg10 = new Dataset("Alejandro Santiago Alonso",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
				SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{6});
		
		//########## ACCOUNT 1 END #########################//
		
		//########## ACCOUNT 2 START #########################//
		Dataset datasetAcc2Seg1 = new Dataset("Jose Rendon Rivera",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
				SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{20});
		
		Dataset datasetAcc2Seg2 = new Dataset("Marcos Lopez",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
				SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{16});
		
		Dataset datasetAcc2Seg3 = new Dataset("Amelia Alvarez",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
				SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{14});
		
		Dataset datasetAcc2Seg4 = new Dataset("Omar de Velarde",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
				SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{13});
		
		Dataset datasetAcc2Seg5 = new Dataset("Francisco Lozano",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
				SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{12});
		
		Dataset datasetAcc2Seg6 = new Dataset("Kedsa Savaz",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
				SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{12});
		
		Dataset datasetAcc2Seg7 = new Dataset("Ricardo Flores",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
				SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{12});
		
		Dataset datasetAcc2Seg8 = new Dataset("Lopez Herrera Martha",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
				SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{11});
		
		Dataset datasetAcc2Seg9 = new Dataset("Teresa Cevallos Bracho",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
				SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{10});
		
		Dataset datasetAcc2Seg10 = new Dataset("Klaus Aguilar",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
				SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{8});
		
		//########## ACCOUNT 2 END #########################//
		
		//########## ACCOUNT 3 START #########################//
		Dataset datasetAcc3Seg1 = new Dataset("Marco Antonio",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
				SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{102});
		
		
		Dataset datasetAcc3Seg2 = new Dataset("Coraline Altamirano",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
				SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{81});
		
		Dataset datasetAcc3Seg3 = new Dataset("Mahali Olvera",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
				SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{73});
		
		Dataset datasetAcc3Seg4 = new Dataset("Liz Briseños",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
				SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{57});
		
		Dataset datasetAcc3Seg5 = new Dataset("Isabel Marron",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
				SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{52});
		
		Dataset datasetAcc3Seg6 = new Dataset("Esme Dguez",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
				SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{45});
		
		Dataset datasetAcc3Seg7 = new Dataset("Maria Félix Cisneros",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
				SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{35});
		
		Dataset datasetAcc3Seg8 = new Dataset("Maruka Falcon De Barrera",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
				SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{34});
		
		Dataset datasetAcc3Seg9 = new Dataset("Lucy Cruz",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
				SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{32});
		
		Dataset datasetAcc3Seg10 = new Dataset("Monica Sanchez Osawa",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
				SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{32});
		//########## ACCOUNT 3 END #########################//
		//$$$$$$$$$$$$$ END MONTHLY $$$$$$$$$$$$$$$$$$$//
		
		
		//$$$$$$$$$$$$$ TRIMESTER $$$$$$$$$$$$$$$$$$$//
				//########## ACCOUNT 1 END #########################//
				Dataset datasetAcc1TrimSeg1 = new Dataset("Alejandro Santiago Alonso",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{37});
				
				Dataset datasetAcc1TrimSeg2 = new Dataset("Maria Cruz Uscanga",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{31});
						
				Dataset datasetAcc1TrimSeg3 = new Dataset("Alfonso Zapote Palma",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{24});
				
				Dataset datasetAcc1TrimSeg4 = new Dataset("Tere De Sánchez",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{23});
				
				Dataset datasetAcc1TrimSeg5 = new Dataset("Lagara Gaecia",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{22});
				
				Dataset datasetAcc1TrimSeg6 = new Dataset("Josemaria Delafuente",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{22});
				
				Dataset datasetAcc1TrimSeg7 = new Dataset("Isabel Lugo Arias",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{21});
				
				Dataset datasetAcc1TrimSeg8 = new Dataset("Aldo F. Paredes",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{20});

				Dataset datasetAcc1TrimSeg9 = new Dataset("Jose Luis Hernandez",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{19});
				
				Dataset datasetAcc1TrimSeg10 = new Dataset("Lucero Ballesteros",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{18});
		
				//########## ACCOUNT 1 END #########################//
				
				//########## ACCOUNT 2 START #########################//
				Dataset datasetAcc2TrimSeg1 = new Dataset("Marcos Lopez",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{73});
				
				Dataset datasetAcc2TrimSeg2 = new Dataset("Ricardo Flores",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{62});
				
				Dataset datasetAcc2TrimSeg3 = new Dataset("Amelia Alvarez",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{53});
				
				Dataset datasetAcc2TrimSeg4 = new Dataset("Carlos Zendejas",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{40});
				
				Dataset datasetAcc2TrimSeg5 = new Dataset("Carlos Tenorio",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{33});
				
				Dataset datasetAcc2TrimSeg6 = new Dataset("Epifanio Cortez Licona",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{29});
				
				Dataset datasetAcc2TrimSeg7 = new Dataset("Esperanza Garcia", SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{28});
				
				Dataset datasetAcc2TrimSeg8 = new Dataset("Francisco Lozano",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{27});
				
				Dataset datasetAcc2TrimSeg9 = new Dataset("Rubin Leftovers",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{26});
				
				Dataset datasetAcc2TrimSeg10 = new Dataset("Marcos Maduro",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{26});
	
				
				
				//########## ACCOUNT 2 END #########################//
				
				//########## ACCOUNT 3 START #########################//
				Dataset datasetAcc3TrimSeg1 = new Dataset("Mahali Olvera",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{114});
				
				
				Dataset datasetAcc3TrimSeg2 = new Dataset("Marco Antonio",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{113});
				
				
				Dataset datasetAcc3TrimSeg3 = new Dataset("Coraline Altamirano",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{81});
				
				Dataset datasetAcc3TrimSeg4 = new Dataset("Liz Briseños",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{72});
				
				Dataset datasetAcc3TrimSeg5 = new Dataset("Isabel Marron",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{70});
				
				Dataset datasetAcc3TrimSeg6 = new Dataset("Maria Guadalupe Vara",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{67});
				
				Dataset datasetAcc3TrimSeg7 = new Dataset("Luisa Bonilla",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{64});
				
				Dataset datasetAcc3TrimSeg8 = new Dataset("Lucero Ballesteros",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{63});
				
				Dataset datasetAcc3TrimSeg9 = new Dataset("Esme Dguez",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{56});
				
				Dataset datasetAcc3TrimSeg10 = new Dataset("Alex Gallardo",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{51});

				//########## ACCOUNT 3 END #########################//
				//$$$$$$$$$$$$$ END TRIMESTER $$$$$$$$$$$$$$$$$$$//
		
				//$$$$$$$$$$$$$ SEMESTER $$$$$$$$$$$$$$$$$$$//
				//########## ACCOUNT 1 END #########################//
				Dataset datasetAcc1SemSeg1 = new Dataset("Alejandro Santiago Alonso",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{36});
							
				Dataset datasetAcc1SemSeg2 = new Dataset("Maria Cruz Uscanga",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{31});
						
				Dataset datasetAcc1SemSeg3 = new Dataset("Alfonso Zapote Palma",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{24});
				
				Dataset datasetAcc1SemSeg4 = new Dataset("Tere De Sánchez",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{23});
				
				Dataset datasetAcc1SemSeg5 = new Dataset("Lagara Gaecia",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{22});
				
				Dataset datasetAcc1SemSeg6 = new Dataset("Josemaria Delafuente",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{22});
				
				Dataset datasetAcc1SemSeg8 = new Dataset("Isabel Lugo Arias",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{19});
				
				Dataset datasetAcc1SemSeg7 = new Dataset("Aldo F. Paredes",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{20});
				
				Dataset datasetAcc1SemSeg10 = new Dataset("July Siller",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{18});
				
				Dataset datasetAcc1SemSeg9 = new Dataset("Lucero Ballesteros",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{18});
				//########## ACCOUNT 1 END #########################//
				
				//########## ACCOUNT 2 START #########################//
				Dataset datasetAcc2SemSeg1 = new Dataset("Marcos Lopez",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{71});
				
				Dataset datasetAcc2SemSeg2 = new Dataset("Ricardo Flores",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{59});
				
				Dataset datasetAcc2SemSeg3 = new Dataset("Amelia Alvarez",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{52});
				
				Dataset datasetAcc2SemSeg4 = new Dataset("Carlos Zendejas",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{39});
				
				Dataset datasetAcc2SemSeg5 = new Dataset("Carlos Tenorio",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{31});
				
				Dataset datasetAcc2SemSeg6 = new Dataset("Epifanio Cortez Licona",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{29});
				
				Dataset datasetAcc2SemSeg7 = new Dataset("Esperanza Garcia",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{27});
				
				Dataset datasetAcc2SemSeg8 = new Dataset("Francisco Lozano",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{27});
				
				Dataset datasetAcc2SemSeg9 = new Dataset("Rubin Leftovers",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{26});
				
				Dataset datasetAcc2SemSeg10 = new Dataset("Marcos Maduro",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{26});
				
				
				//########## ACCOUNT 2 END #########################//
				
				//########## ACCOUNT 3 START #########################//
				Dataset datasetAcc3SemSeg1 = new Dataset("Marco Antonio",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{113});
				
				Dataset datasetAcc3SemSeg2 = new Dataset("Mahali Olvera",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{113});
				
				Dataset datasetAcc3SemSeg3 = new Dataset("Coraline Altamirano",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{81});
				
				Dataset datasetAcc3SemSeg4 = new Dataset("Liz Briseños",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{72});
				
				Dataset datasetAcc3SemSeg5 = new Dataset("Isabel Marron",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{70});
				
				Dataset datasetAcc3SemSeg6 = new Dataset("Maria Guadalupe Vara",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{67});
				
				Dataset datasetAcc3SemSeg7 = new Dataset("Luisa Bonilla",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{64});
				
				Dataset datasetAcc3SemSeg8 = new Dataset("Lucero Ballesteros",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{63});
				
				Dataset datasetAcc3SemSeg9 = new Dataset("Esme Dguez",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{56});
				
				Dataset datasetAcc3SemSeg10 = new Dataset("Alex Gallardo",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{51});
				//########## ACCOUNT 3 END #########################//
				//$$$$$$$$$$$$$ END SEMESTER $$$$$$$$$$$$$$$$$$$//
		
	
		dataAccount1monthly.setLabels(new ArrayList(Arrays.asList("Ricardo Anaya Cortés")));
		dataAccount1monthly.setDatasets(Arrays.asList(datasetAcc1Seg1,datasetAcc1Seg2,datasetAcc1Seg3,datasetAcc1Seg4,
				datasetAcc1Seg5,datasetAcc1Seg6,datasetAcc1Seg7,datasetAcc1Seg8,datasetAcc1Seg9,
				datasetAcc1Seg10));
		
		dataAccount2monthly.setLabels(new ArrayList(Arrays.asList("Margarita Zavala")));
		dataAccount2monthly.setDatasets(Arrays.asList(datasetAcc2Seg1,datasetAcc2Seg2,datasetAcc2Seg3,datasetAcc2Seg4,
				datasetAcc2Seg5,datasetAcc2Seg6,datasetAcc2Seg7,datasetAcc2Seg8,datasetAcc2Seg9,
				datasetAcc2Seg10));
		
		dataAccount3monthly.setLabels(new ArrayList(Arrays.asList("Rafael Moreno Valle")));
		dataAccount3monthly.setDatasets(Arrays.asList(datasetAcc3Seg1,datasetAcc3Seg2,datasetAcc3Seg3,datasetAcc3Seg4,
				datasetAcc3Seg5,datasetAcc3Seg6,datasetAcc3Seg7,datasetAcc3Seg8,datasetAcc3Seg9,
				datasetAcc3Seg10));
		
		
		dataAccount1trimester.setLabels(new ArrayList(Arrays.asList("Ricardo Anaya Cortés")));
		dataAccount1trimester.setDatasets(Arrays.asList(datasetAcc1TrimSeg1,datasetAcc1TrimSeg2,datasetAcc1TrimSeg3,datasetAcc1TrimSeg4,
				datasetAcc1TrimSeg5,datasetAcc1TrimSeg6,datasetAcc1TrimSeg7,datasetAcc1TrimSeg8,datasetAcc1TrimSeg9,
				datasetAcc1TrimSeg10));
		
		dataAccount2trimester.setLabels(new ArrayList(Arrays.asList("Margarita Zavala")));
		dataAccount2trimester.setDatasets(Arrays.asList(datasetAcc2TrimSeg1,datasetAcc2TrimSeg2,datasetAcc2TrimSeg3,datasetAcc2TrimSeg4,
				datasetAcc2TrimSeg5,datasetAcc2TrimSeg6,datasetAcc2TrimSeg7,datasetAcc2TrimSeg8,datasetAcc2TrimSeg9,
				datasetAcc2TrimSeg10));
		
		dataAccount3trimester.setLabels(new ArrayList(Arrays.asList("Rafael Moreno Valle")));
		dataAccount3trimester.setDatasets(Arrays.asList(datasetAcc3TrimSeg1,datasetAcc3TrimSeg2,datasetAcc3TrimSeg3,datasetAcc3TrimSeg4,
				datasetAcc3TrimSeg5,datasetAcc3TrimSeg6,datasetAcc3TrimSeg7,datasetAcc3TrimSeg8,datasetAcc3TrimSeg9,
				datasetAcc3TrimSeg10));
		
		
		dataAccount1semester.setLabels(new ArrayList(Arrays.asList("Ricardo Anaya Cortés")));
		dataAccount1semester.setDatasets(Arrays.asList(datasetAcc1SemSeg1,datasetAcc1SemSeg2,datasetAcc1SemSeg3,datasetAcc1SemSeg4,
				datasetAcc1SemSeg5,datasetAcc1SemSeg6,datasetAcc1SemSeg7,datasetAcc1SemSeg8,datasetAcc1SemSeg9,
				datasetAcc1SemSeg10));
		
		dataAccount2semester.setLabels(new ArrayList(Arrays.asList("Margarita Zavala")));
		dataAccount2semester.setDatasets(Arrays.asList(datasetAcc2SemSeg1,datasetAcc2SemSeg2,datasetAcc2SemSeg3,datasetAcc2SemSeg4,
				datasetAcc2SemSeg5,datasetAcc2SemSeg6,datasetAcc2SemSeg7,datasetAcc2SemSeg8,datasetAcc2SemSeg9,
				datasetAcc2SemSeg10));
		
		dataAccount3semester.setLabels(new ArrayList(Arrays.asList("Rafael Moreno Valle")));
		dataAccount3semester.setDatasets(Arrays.asList(datasetAcc3SemSeg1,datasetAcc3SemSeg2,datasetAcc3SemSeg3,datasetAcc3SemSeg4,
				datasetAcc3SemSeg5,datasetAcc3SemSeg6,datasetAcc3SemSeg7,datasetAcc3SemSeg8,datasetAcc3SemSeg9,
				datasetAcc3SemSeg10));
		
		lstData.add(dataAccount1monthly);
		lstData.add(dataAccount2monthly);
		lstData.add(dataAccount3monthly);
		lstData.add(dataAccount1trimester);
		lstData.add(dataAccount2trimester);
		lstData.add(dataAccount3trimester);
		lstData.add(dataAccount1semester);
		lstData.add(dataAccount2semester);
		lstData.add(dataAccount3semester);
		return lstData;
	}

}
