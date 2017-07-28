package mx.danavis.akin.graphic;

public class Dataset {
	private String label;
	private String fillColor;
	private String strokeColor;
	private String highlightFill;
	private String highlightStroke;
	private int[] data;
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getFillColor() {
		return fillColor;
	}
	public void setFillColor(String fillColor) {
		this.fillColor = fillColor;
	}
	public String getStrokeColor() {
		return strokeColor;
	}
	public void setStrokeColor(String strokeColor) {
		this.strokeColor = strokeColor;
	}
	public String getHighlightFill() {
		return highlightFill;
	}
	public void setHighlightFill(String highlightFill) {
		this.highlightFill = highlightFill;
	}
	public String getHighlightStroke() {
		return highlightStroke;
	}
	public void setHighlightStroke(String highlightStroke) {
		this.highlightStroke = highlightStroke;
	}
	public int[] getData() {
		return data;
	}
	public void setData(int[] data) {
		this.data = data;
	}
	
	
}
