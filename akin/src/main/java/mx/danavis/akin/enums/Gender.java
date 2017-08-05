package mx.danavis.akin.enums;

public enum Gender {
	MEN("Hombres"),
	WOMEN("Mujeres");
	
	private String gender;
	
	private Gender(String s)
	{
		gender = s;
	}

	public String getGender() {
		return gender;
	}
	
	
}
