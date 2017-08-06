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
		Data dataAccount4monthly = new Data();
		Data dataAccount1trimester = new Data();
		Data dataAccount2trimester = new Data();
		Data dataAccount3trimester = new Data();
		Data dataAccount4trimester = new Data();
		Data dataAccount1semester = new Data();
		Data dataAccount2semester = new Data();
		Data dataAccount3semester = new Data();
		Data dataAccount4semester = new Data();
		//$$$$$$$$$$$$$ MONTHLY $$$$$$$$$$$$$$$$$$$//
		//########## ACCOUNT 1 END #########################//
		Dataset datasetAcc1Seg1 = new Dataset("Luis Castillo",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
				SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{10});
		
		Dataset datasetAcc1Seg2 = new Dataset("Rogelio Avila González",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
				SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{9});
		
		Dataset datasetAcc1Seg3 = new Dataset("Alfredo Abreu",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
				SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{8});
		
		Dataset datasetAcc1Seg4 = new Dataset("Zito Fernando Garcia",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
				SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{8});
		
		Dataset datasetAcc1Seg5 = new Dataset("Pako Mejia",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
				SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{7});
		
		Dataset datasetAcc1Seg6 = new Dataset("Jorge Espinosa",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
				SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{5});
		
		Dataset datasetAcc1Seg7 = new Dataset("Edith López Guerrero",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
				SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{5});
		
		Dataset datasetAcc1Seg8 = new Dataset("Damesio Jhonn Stuart",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
				SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{5});
		
		Dataset datasetAcc1Seg9 = new Dataset("Angel Erick Islas Leiva",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
				SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{5});

		Dataset datasetAcc1Seg10 = new Dataset("Esteban Jegg",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
				SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{4});
		
		//########## ACCOUNT 1 END #########################//
		
		//########## ACCOUNT 2 START #########################//
		Dataset datasetAcc2Seg1 = new Dataset("Marco Antonio",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
				SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{102});
		
		Dataset datasetAcc2Seg2 = new Dataset("Coraline Altamirano",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
				SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{81});
		
		Dataset datasetAcc2Seg3 = new Dataset("Mahali Olvera",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
				SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{73});
		
		Dataset datasetAcc2Seg4 = new Dataset("Liz Briseños",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
				SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{57});
		
		Dataset datasetAcc2Seg5 = new Dataset("Isabel Marron",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
				SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{52});
		
		Dataset datasetAcc2Seg6 = new Dataset("Esme Dguez",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
				SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{45});
		
		Dataset datasetAcc2Seg7 = new Dataset("Maria Félix Cisneros",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
				SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{35});
		
		Dataset datasetAcc2Seg8 = new Dataset("Maruka Falcon De Barrera",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
				SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{34});
		
		Dataset datasetAcc2Seg9 = new Dataset("Lucy Cruz",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
				SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{32});
		
		Dataset datasetAcc2Seg10 = new Dataset("Monica Sanchez Osawa",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
				SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{32});
		
		//########## ACCOUNT 2 END #########################//
		
		//########## ACCOUNT 3 START #########################//
		Dataset datasetAcc3Seg1 = new Dataset("Paulino Flores Garcia",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
				SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{37});
		
		
		Dataset datasetAcc3Seg2 = new Dataset("BArturo MLarre",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
				SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{17});
		
		Dataset datasetAcc3Seg3 = new Dataset("Jesus Alfonso Barrios",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
				SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{16});
		
		Dataset datasetAcc3Seg4 = new Dataset("Luzma Pérez",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
				SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{15});
		
		Dataset datasetAcc3Seg5 = new Dataset("Nora Patricia Rubio Salcedo",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
				SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{14});
		
		Dataset datasetAcc3Seg6 = new Dataset("Luz Esmeralda Hernandez Bautista",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
				SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{13});
		
		Dataset datasetAcc3Seg7 = new Dataset("Oscar Treviño",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
				SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{13});
		
		Dataset datasetAcc3Seg8 = new Dataset("Javier Dorantes",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
				SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{13});
		
		Dataset datasetAcc3Seg9 = new Dataset("Perla Yeger",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
				SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{12});
		
		Dataset datasetAcc3Seg10 = new Dataset("Gabriela Muñoz",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
				SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{10});
		//########## ACCOUNT 3 END #########################//
		
		//########## ACCOUNT 4 START #########################//
				Dataset datasetAcc4Seg1 = new Dataset("Karyzu Lobato",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{25});
				
				
				Dataset datasetAcc4Seg2 = new Dataset("Isabel Esquivel Arriaga",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{24});
				
				Dataset datasetAcc4Seg3 = new Dataset("Maria Isabel Arreola Gonzalez",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{24});
				
				Dataset datasetAcc4Seg4 = new Dataset("Beto Lopez",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{17});
				
				Dataset datasetAcc4Seg5 = new Dataset("Salazar Rene",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{16});
				
				Dataset datasetAcc4Seg6 = new Dataset("Leo Movega",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{16});
				
				Dataset datasetAcc4Seg7 = new Dataset("Benjamin Rojas",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{16});
				
				Dataset datasetAcc4Seg8 = new Dataset("Enric Kurosawa Moon",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{16});
				
				Dataset datasetAcc4Seg9 = new Dataset("Marck C. Velasco",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{15});
				
				Dataset datasetAcc4Seg10 = new Dataset("Victor Hugo Valencia Bastida",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{15});
				//########## ACCOUNT 4 END #########################//
		//$$$$$$$$$$$$$ END MONTHLY $$$$$$$$$$$$$$$$$$$//
		
		
		//$$$$$$$$$$$$$ TRIMESTER $$$$$$$$$$$$$$$$$$$//
				//########## ACCOUNT 1 END #########################//
				Dataset datasetAcc1TrimSeg1 = new Dataset("Rogelio Avila González",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{43});
				
				Dataset datasetAcc1TrimSeg2 = new Dataset("Luis Castillo",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{39});
						
				Dataset datasetAcc1TrimSeg3 = new Dataset("Zito Fernando Garcia",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{36});
				
				Dataset datasetAcc1TrimSeg4 = new Dataset("Javier Ortega Najera",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{33});
				
				Dataset datasetAcc1TrimSeg5 = new Dataset("Berenice del Carmen",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{28});
				
				Dataset datasetAcc1TrimSeg6 = new Dataset("Alejandro Cruz Venegas",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{24});
				
				Dataset datasetAcc1TrimSeg7 = new Dataset("Astro Amaro",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{21});
				
				Dataset datasetAcc1TrimSeg8 = new Dataset("Miguel López Jaime",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{19});

				Dataset datasetAcc1TrimSeg9 = new Dataset("Roberto B. Ibarra Hdez",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{18});
				
				Dataset datasetAcc1TrimSeg10 = new Dataset("Francisco Vallarta",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{16});
		
				//########## ACCOUNT 1 END #########################//
				
				//########## ACCOUNT 2 START #########################//
				Dataset datasetAcc2TrimSeg1 = new Dataset("Mahali Olvera",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{114});
				
				Dataset datasetAcc2TrimSeg2 = new Dataset("Marco Antonio",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{113});
				
				Dataset datasetAcc2TrimSeg3 = new Dataset("Coraline Altamirano",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{81});
				
				Dataset datasetAcc2TrimSeg4 = new Dataset("Liz Briseños",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{72});
				
				Dataset datasetAcc2TrimSeg5 = new Dataset("Isabel Marron",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{70});
				
				Dataset datasetAcc2TrimSeg6 = new Dataset("Maria Guadalupe Vara",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{67});
				
				Dataset datasetAcc2TrimSeg7 = new Dataset("Luisa Bonilla", SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{64});
				
				Dataset datasetAcc2TrimSeg8 = new Dataset("Lucero Ballesteros",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{63});
				
				Dataset datasetAcc2TrimSeg9 = new Dataset("Esme Dguez",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{56});
				
				Dataset datasetAcc2TrimSeg10 = new Dataset("Alex Gallardo",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{51});
	
				
				
				//########## ACCOUNT 2 END #########################//
				
				//########## ACCOUNT 3 START #########################//
				Dataset datasetAcc3TrimSeg1 = new Dataset("Luz Esmeralda Hernandez Bautista",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{112});
				
				
				Dataset datasetAcc3TrimSeg2 = new Dataset("Luzma Pérez",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{58});
				
				
				Dataset datasetAcc3TrimSeg3 = new Dataset("Nora Patricia Rubio Salcedo",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{55});
				
				Dataset datasetAcc3TrimSeg4 = new Dataset("Javier Dorantes",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{53});
				
				Dataset datasetAcc3TrimSeg5 = new Dataset("Emilio Zargza",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{51});
				
				Dataset datasetAcc3TrimSeg6 = new Dataset("Paulino Flores Garcia",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{45});
				
				Dataset datasetAcc3TrimSeg7 = new Dataset("Hxko Tdeber",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{38});
				
				Dataset datasetAcc3TrimSeg8 = new Dataset("Gabriela Muñoz",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{37});
				
				Dataset datasetAcc3TrimSeg9 = new Dataset("Miguel Cruz Cruz",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{33});
				
				Dataset datasetAcc3TrimSeg10 = new Dataset("Perla Yeger",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{29});

				//########## ACCOUNT 3 END #########################//
				
				//########## ACCOUNT 4 START #########################//
				Dataset datasetAcc4TrimSeg1 = new Dataset("Carmen Garcia",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{79});
				
				
				Dataset datasetAcc4TrimSeg2 = new Dataset("Gricelda Ayala",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{41});
				
				
				Dataset datasetAcc4TrimSeg3 = new Dataset("Rubens RE",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{40});
				
				Dataset datasetAcc4TrimSeg4 = new Dataset("Erika-Karla Ferrer Camacho",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{40});
				
				Dataset datasetAcc4TrimSeg5 = new Dataset("Marco Antonio Cortes España",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{39});
				
				Dataset datasetAcc4TrimSeg6 = new Dataset("Jose Luis Juarez Varela",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{36});
				
				Dataset datasetAcc4TrimSeg7 = new Dataset("Joel Carrillo",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{36});
				
				Dataset datasetAcc4TrimSeg8 = new Dataset("Ricardo Saúl Rodríguez Pelayo",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{34});
				
				Dataset datasetAcc4TrimSeg9 = new Dataset("Hernando Estrada Morales",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{33});
				
				Dataset datasetAcc4TrimSeg10 = new Dataset("David Gonzalez",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{31});

				//########## ACCOUNT 4 END #########################//
				//$$$$$$$$$$$$$ END TRIMESTER $$$$$$$$$$$$$$$$$$$//
		
				//$$$$$$$$$$$$$ SEMESTER $$$$$$$$$$$$$$$$$$$//
				//########## ACCOUNT 1 END #########################//
				Dataset datasetAcc1SemSeg1 = new Dataset("Berenice del Carmen",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{81});
							
				Dataset datasetAcc1SemSeg2 = new Dataset("Rogelio Avila González",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{77});
						
				Dataset datasetAcc1SemSeg3 = new Dataset("Zito Fernando Garcia",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{71});
				
				Dataset datasetAcc1SemSeg4 = new Dataset("Luis Castillo",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{69});
				
				Dataset datasetAcc1SemSeg5 = new Dataset("Javier Ortega Najera",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{52});
				
				Dataset datasetAcc1SemSeg6 = new Dataset("Alejandro Cruz Venegas",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{50});
				
				Dataset datasetAcc1SemSeg8 = new Dataset("Astro Amaro",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{39});
				
				Dataset datasetAcc1SemSeg7 = new Dataset("Roberto B. Ibarra Hdez",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{37});
				
				Dataset datasetAcc1SemSeg10 = new Dataset("Yacob Martinez",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{37});
				
				Dataset datasetAcc1SemSeg9 = new Dataset("Gabriel O. Barrera",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{36});
				//########## ACCOUNT 1 END #########################//
				
				//########## ACCOUNT 2 START #########################//
				Dataset datasetAcc2SemSeg1 = new Dataset("Marco Antonio",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{113});
				
				Dataset datasetAcc2SemSeg2 = new Dataset("Mahali Olvera",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{113});
				
				Dataset datasetAcc2SemSeg3 = new Dataset("Coraline Altamirano",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{81});
				
				Dataset datasetAcc2SemSeg4 = new Dataset("Liz Briseños",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{72});
				
				Dataset datasetAcc2SemSeg5 = new Dataset("Isabel Marron",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{70});
				
				Dataset datasetAcc2SemSeg6 = new Dataset("Maria Guadalupe Vara",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{67});
				
				Dataset datasetAcc2SemSeg7 = new Dataset("Luisa Bonilla",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{64});
				
				Dataset datasetAcc2SemSeg8 = new Dataset("Lucero Ballesteros",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{63});
				
				Dataset datasetAcc2SemSeg9 = new Dataset("Esme Dguez",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{56});
				
				Dataset datasetAcc2SemSeg10 = new Dataset("Alex Gallardo",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{51});
				
				
				//########## ACCOUNT 2 END #########################//
				
				//########## ACCOUNT 3 START #########################//
				Dataset datasetAcc3SemSeg1 = new Dataset("Luz Esmeralda Hernandez Bautista",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{321});
				
				Dataset datasetAcc3SemSeg2 = new Dataset("Nora Patricia Rubio Salcedo",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{165});
				
				Dataset datasetAcc3SemSeg3 = new Dataset("Emilio Zargza",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{135});
				
				Dataset datasetAcc3SemSeg4 = new Dataset("Luzma Pérez",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{119});
				
				Dataset datasetAcc3SemSeg5 = new Dataset("Javier Dorantes",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{109});
				
				Dataset datasetAcc3SemSeg6 = new Dataset("Miguel Cruz Cruz",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{81});
				
				Dataset datasetAcc3SemSeg7 = new Dataset("Alberto Flores",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{58});
				
				Dataset datasetAcc3SemSeg8 = new Dataset("María Del Carmen Escalante Trejo",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{55});
				
				Dataset datasetAcc3SemSeg9 = new Dataset("Irma Garcia",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{52});
				
				Dataset datasetAcc3SemSeg10 = new Dataset("Lupita González",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{50});
				//########## ACCOUNT 3 END #########################//
				
				//########## ACCOUNT 4 START #########################//
				Dataset datasetAcc4SemSeg1 = new Dataset("Carmen Garcia",SEGUIDOR1_FILL_COLOR,SEGUIDOR1_STROKE_COLOR,
						SEGUIDOR1_HIGHTLIGHTFILL_COLOR,SEGUIDOR1_HIGHTLIGHTSTROKE_COLOR,new int[]{97});
				
				Dataset datasetAcc4SemSeg2 = new Dataset("Erika-Karla Ferrer Camacho",SEGUIDOR2_FILL_COLOR,SEGUIDOR2_STROKE_COLOR,
						SEGUIDOR2_HIGHTLIGHTFILL_COLOR,SEGUIDOR2_HIGHTLIGHTSTROKE_COLOR,new int[]{95});
				
				Dataset datasetAcc4SemSeg3 = new Dataset("Rubens RE",SEGUIDOR3_FILL_COLOR,SEGUIDOR3_STROKE_COLOR,
						SEGUIDOR3_HIGHTLIGHTFILL_COLOR,SEGUIDOR3_HIGHTLIGHTSTROKE_COLOR,new int[]{70});
				
				Dataset datasetAcc4SemSeg4 = new Dataset("Hernando Estrada Morales",SEGUIDOR4_FILL_COLOR,SEGUIDOR4_STROKE_COLOR,
						SEGUIDOR4_HIGHTLIGHTFILL_COLOR,SEGUIDOR4_HIGHTLIGHTSTROKE_COLOR,new int[]{64});
				
				Dataset datasetAcc4SemSeg5 = new Dataset("Gricelda Ayala",SEGUIDOR5_FILL_COLOR,SEGUIDOR5_STROKE_COLOR,
						SEGUIDOR5_HIGHTLIGHTFILL_COLOR,SEGUIDOR5_HIGHTLIGHTSTROKE_COLOR,new int[]{55});
				
				Dataset datasetAcc4SemSeg6 = new Dataset("Luis Diaz",SEGUIDOR6_FILL_COLOR,SEGUIDOR6_STROKE_COLOR,
						SEGUIDOR6_HIGHTLIGHTFILL_COLOR,SEGUIDOR6_HIGHTLIGHTSTROKE_COLOR,new int[]{53});
				
				Dataset datasetAcc4SemSeg7 = new Dataset("Marco Antonio Cortes España",SEGUIDOR7_FILL_COLOR,SEGUIDOR7_STROKE_COLOR,
						SEGUIDOR7_HIGHTLIGHTFILL_COLOR,SEGUIDOR7_HIGHTLIGHTSTROKE_COLOR,new int[]{44});
				
				Dataset datasetAcc4SemSeg8 = new Dataset("Martín Sánchez",SEGUIDOR8_FILL_COLOR,SEGUIDOR8_STROKE_COLOR,
						SEGUIDOR8_HIGHTLIGHTFILL_COLOR,SEGUIDOR8_HIGHTLIGHTSTROKE_COLOR,new int[]{40});
				
				Dataset datasetAcc4SemSeg9 = new Dataset("Salazar Rene",SEGUIDOR9_FILL_COLOR,SEGUIDOR9_STROKE_COLOR,
						SEGUIDOR9_HIGHTLIGHTFILL_COLOR,SEGUIDOR9_HIGHTLIGHTSTROKE_COLOR,new int[]{38});
				
				Dataset datasetAcc4SemSeg10 = new Dataset("Jose Luis Juarez Varela",SEGUIDOR10_FILL_COLOR,SEGUIDOR10_STROKE_COLOR,
						SEGUIDOR10_HIGHTLIGHTFILL_COLOR,SEGUIDOR10_HIGHTLIGHTSTROKE_COLOR,new int[]{38});
				//########## ACCOUNT 4 END #########################//
				//$$$$$$$$$$$$$ END SEMESTER $$$$$$$$$$$$$$$$$$$//
		
	
		dataAccount1monthly.setLabels(new ArrayList(Arrays.asList("Andrés Manuel López Obrador")));
		dataAccount1monthly.setDatasets(Arrays.asList(datasetAcc1Seg1,datasetAcc1Seg2,datasetAcc1Seg3,datasetAcc1Seg4,
				datasetAcc1Seg5,datasetAcc1Seg6,datasetAcc1Seg7,datasetAcc1Seg8,datasetAcc1Seg9,
				datasetAcc1Seg10));
		
		dataAccount2monthly.setLabels(new ArrayList(Arrays.asList("Rafael Moreno Valle")));
		dataAccount2monthly.setDatasets(Arrays.asList(datasetAcc2Seg1,datasetAcc2Seg2,datasetAcc2Seg3,datasetAcc2Seg4,
				datasetAcc2Seg5,datasetAcc2Seg6,datasetAcc2Seg7,datasetAcc2Seg8,datasetAcc2Seg9,
				datasetAcc2Seg10));
		
		dataAccount3monthly.setLabels(new ArrayList(Arrays.asList("Miguel Ángel Mancera")));
		dataAccount3monthly.setDatasets(Arrays.asList(datasetAcc3Seg1,datasetAcc3Seg2,datasetAcc3Seg3,datasetAcc3Seg4,
				datasetAcc3Seg5,datasetAcc3Seg6,datasetAcc3Seg7,datasetAcc3Seg8,datasetAcc3Seg9,
				datasetAcc3Seg10));
		
		dataAccount4monthly.setLabels(new ArrayList(Arrays.asList("Eruviel Ávila Villegas")));
		dataAccount4monthly.setDatasets(Arrays.asList(datasetAcc4Seg1,datasetAcc4Seg2,datasetAcc4Seg3,datasetAcc4Seg4,
				datasetAcc4Seg5,datasetAcc4Seg6,datasetAcc4Seg7,datasetAcc4Seg8,datasetAcc4Seg9,
				datasetAcc4Seg10));
		
		
		dataAccount1trimester.setLabels(new ArrayList(Arrays.asList("Andrés Manuel López Obrador")));
		dataAccount1trimester.setDatasets(Arrays.asList(datasetAcc1TrimSeg1,datasetAcc1TrimSeg2,datasetAcc1TrimSeg3,datasetAcc1TrimSeg4,
				datasetAcc1TrimSeg5,datasetAcc1TrimSeg6,datasetAcc1TrimSeg7,datasetAcc1TrimSeg8,datasetAcc1TrimSeg9,
				datasetAcc1TrimSeg10));
		
		dataAccount2trimester.setLabels(new ArrayList(Arrays.asList("Rafael Moreno Valle")));
		dataAccount2trimester.setDatasets(Arrays.asList(datasetAcc2TrimSeg1,datasetAcc2TrimSeg2,datasetAcc2TrimSeg3,datasetAcc2TrimSeg4,
				datasetAcc2TrimSeg5,datasetAcc2TrimSeg6,datasetAcc2TrimSeg7,datasetAcc2TrimSeg8,datasetAcc2TrimSeg9,
				datasetAcc2TrimSeg10));
		
		dataAccount3trimester.setLabels(new ArrayList(Arrays.asList("Miguel Ángel Mancera")));
		dataAccount3trimester.setDatasets(Arrays.asList(datasetAcc3TrimSeg1,datasetAcc3TrimSeg2,datasetAcc3TrimSeg3,datasetAcc3TrimSeg4,
				datasetAcc3TrimSeg5,datasetAcc3TrimSeg6,datasetAcc3TrimSeg7,datasetAcc3TrimSeg8,datasetAcc3TrimSeg9,
				datasetAcc3TrimSeg10));
		
		dataAccount4trimester.setLabels(new ArrayList(Arrays.asList("Eruviel Ávila Villegas")));
		dataAccount4trimester.setDatasets(Arrays.asList(datasetAcc4TrimSeg1,datasetAcc4TrimSeg2,datasetAcc4TrimSeg3,datasetAcc4TrimSeg4,
				datasetAcc4TrimSeg5,datasetAcc4TrimSeg6,datasetAcc4TrimSeg7,datasetAcc4TrimSeg8,datasetAcc4TrimSeg9,
				datasetAcc4TrimSeg10));
		
		
		dataAccount1semester.setLabels(new ArrayList(Arrays.asList("Andrés Manuel López Obrador")));
		dataAccount1semester.setDatasets(Arrays.asList(datasetAcc1SemSeg1,datasetAcc1SemSeg2,datasetAcc1SemSeg3,datasetAcc1SemSeg4,
				datasetAcc1SemSeg5,datasetAcc1SemSeg6,datasetAcc1SemSeg7,datasetAcc1SemSeg8,datasetAcc1SemSeg9,
				datasetAcc1SemSeg10));
		
		dataAccount2semester.setLabels(new ArrayList(Arrays.asList("Rafael Moreno Valle")));
		dataAccount2semester.setDatasets(Arrays.asList(datasetAcc2SemSeg1,datasetAcc2SemSeg2,datasetAcc2SemSeg3,datasetAcc2SemSeg4,
				datasetAcc2SemSeg5,datasetAcc2SemSeg6,datasetAcc2SemSeg7,datasetAcc2SemSeg8,datasetAcc2SemSeg9,
				datasetAcc2SemSeg10));
		
		dataAccount3semester.setLabels(new ArrayList(Arrays.asList("Miguel Ángel Mancera")));
		dataAccount3semester.setDatasets(Arrays.asList(datasetAcc3SemSeg1,datasetAcc3SemSeg2,datasetAcc3SemSeg3,datasetAcc3SemSeg4,
				datasetAcc3SemSeg5,datasetAcc3SemSeg6,datasetAcc3SemSeg7,datasetAcc3SemSeg8,datasetAcc3SemSeg9,
				datasetAcc3SemSeg10));
		
		dataAccount4semester.setLabels(new ArrayList(Arrays.asList("Eruviel Ávila Villegas")));
		dataAccount4semester.setDatasets(Arrays.asList(datasetAcc4SemSeg1,datasetAcc4SemSeg2,datasetAcc4SemSeg3,datasetAcc4SemSeg4,
				datasetAcc4SemSeg5,datasetAcc4SemSeg6,datasetAcc4SemSeg7,datasetAcc4SemSeg8,datasetAcc4SemSeg9,
				datasetAcc4SemSeg10));
		
		lstData.add(dataAccount1monthly);
		lstData.add(dataAccount2monthly);
		lstData.add(dataAccount3monthly);
		lstData.add(dataAccount4monthly);
		lstData.add(dataAccount1trimester);
		lstData.add(dataAccount2trimester);
		lstData.add(dataAccount3trimester);
		lstData.add(dataAccount4trimester);
		lstData.add(dataAccount1semester);
		lstData.add(dataAccount2semester);
		lstData.add(dataAccount3semester);
		lstData.add(dataAccount4semester);
		return lstData;
	}

}
