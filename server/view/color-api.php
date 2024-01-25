<?php

class ColorApi {

		public function outputColors($colors): void {
			if (is_array($colors)) {
				$json = [
					'result' => $colors
				];
			} 
			header("Content-Type: application/json");

			
			echo json_encode($json);
		}

	public function outputColorById($color): void {
		if ($color !== null) {
			$json = [
				'color' => $color
			];
		} 

		header("Content-Type: application/json");
		echo json_encode($json);
	}

}

?>