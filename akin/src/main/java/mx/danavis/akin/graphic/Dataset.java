package mx.danavis.akin.graphic;

public class Dataset {
	private String label;
	private String fillColor;
	private String strokeColor;
	private String highlightFill;
	private String highlightStroke;
	private String pointColor;
	private String pointStrokeColor;
	private String pointHighlightFill;
	private String pointHighlightStroke;
	private int[] data;
	
	public Dataset(){}
	
	public Dataset(String label, String fillColor, String strokeColor, String highlightFill, String highlightStroke,
			int[] data) {
		super();
		this.label = label;
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;
		this.highlightFill = highlightFill;
		this.highlightStroke = highlightStroke;
		this.data = data;
	}
	
	public Dataset(String label, int[] data) {
		super();
		this.label = label;
		this.data = data;
	}

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

	public String getPointColor() {
		return pointColor;
	}

	public void setPointColor(String pointColor) {
		this.pointColor = pointColor;
	}

	public String getPointStrokeColor() {
		return pointStrokeColor;
	}

	public void setPointStrokeColor(String pointStrokeColor) {
		this.pointStrokeColor = pointStrokeColor;
	}

	public String getPointHighlightFill() {
		return pointHighlightFill;
	}

	public void setPointHighlightFill(String pointHighlightFill) {
		this.pointHighlightFill = pointHighlightFill;
	}

	public String getPointHighlightStroke() {
		return pointHighlightStroke;
	}

	public void setPointHighlightStroke(String pointHighlightStroke) {
		this.pointHighlightStroke = pointHighlightStroke;
	}
	
	
	
}
