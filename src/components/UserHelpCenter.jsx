import "./Assets/Styles/UserHelpCenter.css"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

function UserHelpCenter () {

    return (
        <Box className="user-helpCenter-container">
            <h1 className="user-section-title">CENTRO DE AYUDA</h1>
            <Accordion allowToggle className="user-helpCenter-section">
                <AccordionItem>
                    <AccordionButton className="user-helpCenter-section-title">
                        <Box flex={1} textAlign="left">{`PREGUNTAS FRECUENTES (FAQs)`}</Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel className="user-helpCenter-section-drop">
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton className="user-helpCenter-section-title">
                        <Box flex={1} textAlign="left">{`DEVOLUCIONES Y GARANTÍAS`}</Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel className="user-helpCenter-section-drop">
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton className="user-helpCenter-section-title">
                        <Box flex={1} textAlign="left">{`GUIAS Y TUTORIALES`}</Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel className="user-helpCenter-section-drop">
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                        <Box>
                            <h2>¿Pregunta Estandar?</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam orci,
                                laoreet in vestibulum vehicula, dictum a nisl. Donec imperdiet lorem vitae urna mattis, non convallis felis egestas.
                                Vivamus luctus purus lacinia arcu imperdiet sagittis id ac lorem. Vivamus quis est non nisi hendrerit gravida. Integer tempus venenatis dui vitae iaculis.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.
                                Nulla pulvinar lacus ac tempus volutpat. Fusce dolor augue, bibendum vel nisl in, sagittis porttitor ex.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

export default UserHelpCenter;