<template>



    <div class="row" v-if="$store.state.devices.length > 0">

        <div v-for="(widget, index) in $store.state.selectedDevice.template.widgets" :key="index"
            :class="[widget.column]">

            <Rtnumberchart v-if="widget.widget == 'numberchart'" :config="fixWidget(widget)"></Rtnumberchart>

            <Iotswitch v-if="widget.widget == 'switch'" :config="fixWidget(widget)"></Iotswitch>

            <Iotbutton v-if="widget.widget == 'button'" :config="fixWidget(widget)"></Iotbutton>

            <Iotindicator v-if="widget.widget == 'indicator'" :config="fixWidget(widget)"></Iotindicator>
        </div>
    </div>

    <div v-else>

        <div>

            <h1><center>SGAIoT</center></h1>
            <h3><center>Project 776-120</center></h3>
            <h4><center>Sistema de gestion agricola basado en internet de las cosas y aprendizaje de maquina</center></h4>

            <h4><center>Equipo de trabajo</center></h4>
            <h3>Integrantes Principales</h3>
            <table style="width:100%">
            <tr>
                <td><center><br><img src="img//Docente1.png" height="150"></img></br></img></center></td> 
                <td><center><br><img src="img//Docente2.png" height="150"></img></br></img></center></td>
                <td><center><br><img src="img//Docente3.png" height="150"></img></br></img></center></td>
            </tr>
            <tr>
                <td><br><center><h4>David Rivera</h4>
                Ingeniero Electrónico</br>
                Magíster en Ingeniería</br>
                </center></td>
                <td><br><center><h4>Gabriel Cadavid</h4>
                Ingeniero Químico</br>
                Magíster en Ingeniería</br>
                Ingeniería Química</br>
                </center></td>
                <td><br><center><h4>Julian Caicedo</h4>
                Ingeniero Electrónico</br>
                Magíster en Ingeniería</br>
                y Automatización industrial</br>
                </center></td>
            </tr>
            <br></br>
            <h3>Colaboradores</h3>
            </table>
            <table style="width:100%">
            <tr>
                <td><center><br><img src="img//Integrantes.jpg" height="250"></img></br></img></center></td>
                <td><center>
                    <br>Eduardo A. Villar<br>Estudiante Ing Mecanica</br></br>
                    <br>Raquel Marin<br>Estudiante Ing Mecanica</br></br>
                    <br>Maria A. Ramirez<br>Estudiante Ing Mecanica</br></br>
                </center></td>
                <td><center>
                    <br>Leidy J Gonzales<br>Estudiante Ing Biomedica</br></br>
                    <br>Santiago Ruiz<br>Estudiante Ing Biomedica</br></br>
                </center></td>
                <td><center>
                    <br>Erika D Castañeda<br>Estudiante Ing Electronica</br></br>
                    <br>Victor M Patiño<br>Estudiante Ing Electronica</br></br>
                </center></td>
            </tr>
            </table>

        </div>

        
    </div>

</template>
<script>

export default {
    middleware: 'authenticated',
    name: 'Dashboard',
    data() {
        return {


        }
    },

    mounted() {


    },

    methods: {

        fixWidget(widget) {
            var widgetCopy = JSON.parse(JSON.stringify(widget));
            widgetCopy.selectedDevice.dId = this.$store.state.selectedDevice.dId;
            widgetCopy.selectedDevice.name = this.$store.state.selectedDevice.name;
            widgetCopy.userId = this.$store.state.selectedDevice.userId;

            if (widget.widget == "numberchart") {
                widgetCopy.demo = false;
            }

            return widgetCopy;
        }

    }

};
</script>